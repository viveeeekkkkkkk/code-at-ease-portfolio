import Message from "../models/message.model.js";

export const submitMessage = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const newMessage = await Message.create({
      name,
      email,
      message,
    });

    console.log("📩 New Mission Message Saved:", newMessage);

    res.status(201).json({
      success: true,
      message: "Mission message received",
    });
  } catch (error) {
    console.error("❌ Contact error:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};
