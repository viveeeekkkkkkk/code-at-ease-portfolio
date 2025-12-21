import express from "express";
import { submitMessage } from "../controllers/contact.controller.js";

const router = express.Router();

router.post("/send", submitMessage);

export default router;
