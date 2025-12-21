import Message from "../models/message.model.js";

export const getAllMessages = async (req, res) => {
  try {
    const messages = await Message.find().sort({ createdAt: -1 });
    res.json(messages);
  } catch (error) {
    console.error("❌ Admin fetch error:", error);
    res.status(500).json({ message: "Failed to fetch messages" });
  }
};
