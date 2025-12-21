import express from "express";
import { getAllMessages } from "../controllers/admin.controller.js";

const router = express.Router();

router.get("/messages", getAllMessages);

export default router;
