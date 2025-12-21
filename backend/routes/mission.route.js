import express from "express";

const router = express.Router();

// Mission status route
router.get("/status", (req, res) => {
  res.json({
    mission: "Code-at-4",
    status: "ACTIVE",
    mode: "LOCAL ONLY",
    time: new Date().toISOString(),
  });
});

export default router;
