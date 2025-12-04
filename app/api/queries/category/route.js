import { db } from "@/db";
import { queries, categories } from "@/db/schema";
import { eq } from "drizzle-orm";
import { requireSession } from "@/lib/auth/requireSession";


//https://url/api/queries/category?categoryId=someCategoryId
export async function GET(request) {
  try {

    const session = await requireSession();

    if (!session.user?.id) {
      return new Response(
        JSON.stringify({ error: "Unauthorized" }),
        { status: 401 }
      );
    }

    const { searchParams } = new URL(request.url);
    const categoryId = searchParams.get("categoryId");

    if (!categoryId) {
      return new Response(
        JSON.stringify({ error: "Missing categoryId query parameter" }),
        { status: 400 }
      );
    }

    const categoryExists = await db
      .select()
      .from(categories)
      .where(eq(categories.categoryId, categoryId));

    if (categoryExists.length === 0) {
      return new Response(
        JSON.stringify({ error: "Category not found" }),
        { status: 404 }
      );
    }

    const result = await db
      .select()
      .from(queries)
      .where(eq(queries.categoryId, categoryId));

    return new Response(JSON.stringify(result), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });

  } catch (err) {
    console.error(err);
    return new Response(
      JSON.stringify({ error: err.message || "Server error" }),
      { status: 500 }
    );
  }
}
