import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";

import missionRoutes from "./routes/mission.route.js";
import contactRoutes from "./routes/contact.route.js";
import adminRoutes from "./routes/admin.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ CORS FIX (VERY IMPORTANT)
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
  })
);

app.use(express.json());

// connect database
connectDB();

// routes
app.use("/mission", missionRoutes);
app.use("/contact", contactRoutes);
app.use("/admin", adminRoutes);

app.get("/", (req, res) => {
  res.send("🚀 Mission Code-at-4 Backend Running");
});

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
