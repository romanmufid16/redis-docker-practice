import Redis from "ioredis";

const redis = new Redis({
  host: 'redis-containers',
  port: 6379,
});

redis.on("connect", () => {
  console.log("Redis connected");
});

redis.on("error", (err) => {
  console.error("Redis error:", err);
});

export default redis;