import { getVisitorCount } from "@/redis/visitor-count";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    try {
        const visitorCount = await getVisitorCount();
        return NextResponse.json({ ok: true, status: 200, count: visitorCount });
    } catch (error: any) {
        console.error("Getting failed to fetch visitor count", error);
        return NextResponse.json({ ok: false, status: 500, message: "Failed to fetch visitor count", error: error.message });
    }
}