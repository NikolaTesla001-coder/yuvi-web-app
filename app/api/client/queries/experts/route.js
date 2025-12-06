import { db } from "@/lib/schema/db";
import { experts } from "@/lib/schema/index";

export async function GET(req) {
  try {

    const allExperts = await db.select().from(experts);

    return Response.json(allExperts);
  } catch (err) {
    return Response.json({ error: err.message }, { status: 500 });
  }
}