import { db } from "@/lib/db";
import { queries, answers, experts } from "@/lib/schema";
import { eq } from "drizzle-orm";
import { randomUUID } from "crypto";

// GET ALL QUERIES WITH ANSWERS (Home Page)
export async function GET() {
  try {
    const rows = await db
      .select()
      .from(queries)
      .leftJoin(answers, eq(queries.queryId, answers.queryId))
      .leftJoin(experts, eq(answers.expertId, experts.expertId));

    const grouped = {};

    rows.forEach((row) => {
      const q = row.queries;
      const a = row.answers;
      const e = row.experts;

      if (!grouped[q.queryId]) {
        grouped[q.queryId] = {
          ...q,
          answers: [],
        };
      }

      if (a && a.answerId) {
        grouped[q.queryId].answers.push({
          answerId: a.answerId,
          answerBody: a.answerBody,
          expertId: a.expertId,
          expertName: e?.username || null,
          createdAt: a.createdAt,
          queryId: a.queryId,
        });
      }
    });

    const finalResult = Object.values(grouped);

    return Response.json(finalResult, { status: 200 });
  } catch (err) {
    return Response.json(
      { error: "Failed to fetch queries", details: err.message },
      { status: 500 }
    );
  }
}

// POST A NEW QUERY
export async function POST(req) {
  try {
    const { questionTitle, questionBody, clientId, categoryId } =
      await req.json();

    if (!questionTitle?.trim())
      return Response.json(
        { error: "questionTitle required" },
        { status: 400 }
      );

    if (!questionBody?.trim())
      return Response.json({ error: "questionBody required" }, { status: 400 });

    if (!clientId?.trim())
      return Response.json({ error: "clientId required" }, { status: 400 });

    if (!categoryId?.trim())
      return Response.json({ error: "categoryId required" }, { status: 400 });

    const [created] = await db
      .insert(queries)
      .values({
        queryId: randomUUID(),
        questionTitle,
        questionBody,
        clientId,
        categoryId,
      })
      .returning();

    return Response.json(created, { status: 201 });
  } catch (err) {
    return Response.json(
      { error: "Failed to create query", details: err.message },
      { status: 500 }
    );
  }
}
