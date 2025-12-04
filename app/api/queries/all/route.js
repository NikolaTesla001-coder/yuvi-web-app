import { db } from "@/db";
import { queries } from "@/db/schema";
import { desc } from "drizzle-orm";

//http:url/api/queries/all?page=1&limit=10
export async function GET(req) {
  try {
    const url = new URL(req.url);
    const page = Number(url.searchParams.get("page") || 1);
    const limit = Number(url.searchParams.get("limit") || 10);

    const data = await db
      .select()
      .from(queries)
      .orderBy(desc(queries.createdAt))
      .limit(limit)
      .offset((page - 1) * limit);

    return Response.json({ data }, { status: 200 }); //data:[{},{}]
  } catch (err) {
    return Response.json({ error: "Server error" }, { status: 500 });
  }
}
