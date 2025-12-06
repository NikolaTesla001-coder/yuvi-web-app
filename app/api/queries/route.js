import { ilike, eq, and, desc } from "drizzle-orm";
import { db } from "@/lib/db";
import { categories, queries, clients,answers } from "@/lib/schema";

export async function GET(req) {
  try {
    console.log("get all queries api hitted");

    const url = new URL(req.url);

    const q = url.searchParams.get("q")?.trim() || null;
    const categoryId = url.searchParams.get("categoryId") || null;
    const page = Number(url.searchParams.get("page") || 1);
    const limit = Number(url.searchParams.get("limit") || 10);

    let conditions = [];

    // Search filter
    if (q) conditions.push(ilike(queries.questionTitle, `%${q}%`));

    // Category filter
    if (categoryId) {
      const exists = await db
        .select()
        .from(categories)
        .where(eq(categories.categoryId, categoryId));

      if (exists.length === 0) {
        return Response.json({ error: "Category not found" }, { status: 404 });
      }

      conditions.push(eq(queries.categoryId, categoryId));
    }

    const whereCondition = conditions.length ? and(...conditions) : undefined;

    // ⭐ JOIN categories + clients
    const result = await db
      .select({
        queryId: queries.queryId,
        questionTitle: queries.questionTitle,
        question: queries.questionBody,
        createdAt: queries.createdAt,

        // category
        categoryId: queries.categoryId,
        categoryName: categories.name,

        // client
        clientId: queries.clientId,
        clientName: clients.username,
      })
      .from(queries)
      .leftJoin(categories, eq(queries.categoryId, categories.categoryId))
      .leftJoin(clients, eq(queries.clientId, clients.clientId))
      .where(whereCondition)
      .orderBy(desc(queries.createdAt))
      .limit(limit)
      .offset((page - 1) * limit);

    const hasMore = result.length === limit;

    console.log("get all queries api result:", result);

    return Response.json({ data: result, hasMore }, { status: 200 });

  } catch (err) {
    console.error("API ERROR:", err);
    return Response.json({ error: err.message }, { status: 500 });
  }
}
