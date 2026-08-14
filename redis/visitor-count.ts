import { RedisClient, VISITOR_COUNT_KEY } from "./client";

export const setVisitorCount = async (count: number) => {
    try {
        return await RedisClient.set(VISITOR_COUNT_KEY, count);
    } catch (error) {
        console.error("Error setting visitor count", error);
    }
};

export const getVisitorCount = async () => {
    try {
        return await RedisClient.get(VISITOR_COUNT_KEY);
    } catch (error) {
        console.error("Error getting visitor count", error);
    }
};

export const incrementVisitorCount = async () => {
    try {
        return await RedisClient.incr(VISITOR_COUNT_KEY);
    } catch (error) {
        console.error("Error incrementing visitor count", error);
    }
};