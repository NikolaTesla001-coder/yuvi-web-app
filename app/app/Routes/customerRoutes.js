import express from "express";
import {
  signup,
  login,
  logout,
  createQuery,
  getMyQueries,
  getQueryById,
  getAllAnswered,
  getAnsweredByDomain,
  getChatRoom,
  getMessages,
  sendMessage
} from "../controllers/customerController.js";

import auth from "../middleware/auth.js";
import isCustomer from "../middleware/isCustomer.js";

const router = express.Router();

// AUTH
router.post("/auth/customer/signup", signup);
router.post("/auth/customer/login", login);
router.post("/auth/logout", auth, logout);

// QUERIES
router.post("/queries", auth, isCustomer, createQuery);
router.get("/queries/my", auth, isCustomer, getMyQueries);
router.get("/queries/:id", auth, isCustomer, getQueryById);

// PUBLIC ANSWERED QUERIES
router.get("/queries/answered", auth, isCustomer, getAllAnswered);
router.get("/queries/answered/domain/:domain", auth, isCustomer, getAnsweredByDomain);

// CHAT
router.get("/chat/query/:queryId", auth, isCustomer, getChatRoom);
router.get("/chat/:chatId/messages", auth, isCustomer, getMessages);
router.post("/chat/:chatId/message", auth, isCustomer, sendMessage);

export default router;
