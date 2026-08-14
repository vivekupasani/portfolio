import Redis from "ioredis";

export const VISITOR_COUNT_KEY = "visitor_count";

export const RedisClient = new Redis(
    process.env.REDIS_URL as string,
    {
        maxRetriesPerRequest: 2,
        enableReadyCheck: true,
    }
);

RedisClient.on("error", (err) => {
    console.error("Redis Client Error", err);
});

RedisClient.on("ready", () => {
    console.log("Redis Client Ready");
});