import { db } from "@/lib/db";
import { posts } from "@/lib/schema/index";
import { eq } from "drizzle-orm";

export async function GET(req) {
  try {
    const clientId = req.nextUrl.searchParams.get("clientId");

    if (!clientId)
      return Response.json({ error: "clientId is required" }, { status: 400 });

    const result = await db.select().from(posts).where(eq(posts.clientId, clientId));

    return Response.json(result);

  } catch (e) {
    return Response.json({ error: e.message }, { status: 500 });
  }
}
