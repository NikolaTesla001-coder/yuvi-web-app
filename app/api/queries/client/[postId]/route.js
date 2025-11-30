import { db } from "@/lib/db";
import { posts, answers } from "@/lib/schema/index";
import { eq } from "drizzle-orm";

export async function GET(req, { params }) {
  try {
    const { postId } = params;

    const result = await db
      .select()
      .from(posts)
      .leftJoin(answers, eq(posts.postId, answers.postId))
      .where(eq(posts.postId, postId));

    return Response.json(result[0] ?? {});

  } catch (e) {
    return Response.json({ error: e.message }, { status: 500 });
  }
}
