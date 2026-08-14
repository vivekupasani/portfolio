import { incrementVisitorCount } from "@/redis/visitor-count";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const updatedVisitorCount = await incrementVisitorCount();
    return NextResponse.json({ status: 200, data: updatedVisitorCount });
}