import express from "express";
import redis from "../redisClient.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const visits = await redis.incr("visits");
    console.log("Jumlah kunjungan (setelah increment):", visits);
    res.send(`Jumlah kunjungan: ${visits}`);
  } catch (error) {
    res.status(500).send("Terjadi kesalahan pada server");
  }
});

export default router;
