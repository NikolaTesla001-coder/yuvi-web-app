import { authOptions } from "@/lib/auth/authOptions";
import { db } from "@/lib/db";
import { queries } from "@/lib/schema";
import { eq } from "drizzle-orm";

export async function GET(req) {
  try {
    const clientId = req.nextUrl.searchParams.get("clientId");

    session = await getServerSession(authOptions);

    if (session.role != "client") {
      return Response.json({ error: "Error, Client not authenticated" }, { status: 500 });
    }

    if (!clientId) {
      return Response.json({ error: "clientId required" }, { status: 400 });
    }

    const result = await db.select().from(queries).where(eq(queries.clientId, clientId));

    return Response.json(result);
  } catch (err) {
    return Response.json({ error: err.message }, { status: 500 });
  }
}
