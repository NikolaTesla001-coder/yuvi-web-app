import { db } from "@/lib/db";
import { posts } from "@/lib/schema/index";
import { randomUUID } from "crypto";

export async function POST(req) {
  try {
    const { questionTitle, questionBody, clientId, categoryId } = await req.json();

    if (!clientId || !categoryId)
      return Response.json({ error: "clientId and categoryId are required" }, { status: 400 });

    const [created] = await db.insert(posts).values({
      postId: randomUUID(),
      questionTitle,
      questionBody,
      clientId,
      categoryId,
    }).returning();

    return Response.json(created, { status: 201 });

  } catch (e) {
    return Response.json({ error: e.message }, { status: 500 });
  }
}
