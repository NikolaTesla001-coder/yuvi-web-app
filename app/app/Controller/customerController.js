import { db } from "../lib/db.js";
import { users, queries, answers, chatRooms, chatMessages } from "../lib/schema/index.js";
import { eq, and } from "drizzle-orm";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

// ------------------- AUTH -------------------

export async function signup(req, res) {
  const { name, email, password } = req.body;
  const hash = await bcrypt.hash(password, 10);

  await db.insert(users).values({
    name,
    email,
    password: hash,
    role: "customer"
  });

  res.json({ message: "Customer registered" });
}

export async function login(req, res) {
  const { email, password } = req.body;

  const [user] = await db.select().from(users).where(eq(users.email, email));
  if (!user) return res.status(404).json({ error: "User not found" });

  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.status(401).json({ error: "Invalid credentials" });

  const token = jwt.sign(
    { id: user.id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: "1d" }
  );

  res.json({ token });
}

export async function logout(req, res) {
  res.json({ message: "Logged out" });
}

// ------------------- QUERIES -------------------

export async function createQuery(req, res) {
  const { title, description, domain } = req.body;

  const result = await db.insert(queries).values({
    title,
    description,
    domain,
    customerId: req.user.id
  }).returning();

  res.json(result[0]);
}

export async function getMyQueries(req, res) {
  const result = await db
    .select()
    .from(queries)
    .where(eq(queries.customerId, req.user.id));

  res.json(result);
}

export async function getQueryById(req, res) {
  const id = Number(req.params.id);

  const [result] = await db
    .select()
    .from(queries)
    .leftJoin(answers, eq(queries.id, answers.queryId))
    .where(eq(queries.id, id));

  res.json(result);
}

export async function getAllAnswered(req, res) {
  const result = await db
    .select()
    .from(queries)
    .innerJoin(answers, eq(queries.id, answers.queryId));

  res.json(result);
}

export async function getAnsweredByDomain(req, res) {
  const domain = req.params.domain;

  const result = await db
    .select()
    .from(queries)
    .innerJoin(answers, eq(queries.id, answers.queryId))
    .where(eq(queries.domain, domain));

  res.json(result);
}

// ------------------- CHAT -------------------

export async function getChatRoom(req, res) {
  const queryId = Number(req.params.queryId);

  const [query] = await db
    .select()
    .from(queries)
    .leftJoin(answers, eq(queries.id, answers.queryId))
    .where(eq(queries.id, queryId));

  if (!query.answers)
    return res.status(400).json({ error: "Chat only after answer" });

  // Check if chat room exists
  const [room] = await db.select().from(chatRooms).where(eq(chatRooms.queryId, queryId));

  if (room) return res.json(room);

  // Create chat room
  const [created] = await db.insert(chatRooms).values({
    queryId,
    customerId: query.queries.customerId,
    expertId: query.answers.expertId
  }).returning();

  res.json(created);
}

export async function getMessages(req, res) {
  const chatId = Number(req.params.chatId);

  const msgs = await db
    .select()
    .from(chatMessages)
    .where(eq(chatMessages.chatId, chatId));

  res.json(msgs);
}

export async function sendMessage(req, res) {
  const chatId = Number(req.params.chatId);
  const { text } = req.body;

  const [msg] = await db.insert(chatMessages).values({
    chatId,
    senderId: req.user.id,
    text
  }).returning();

  res.json(msg);
}
