import resume1 from "@/const/resume1";
import { NextResponse, NextRequest } from "next/server";


export function POST(request: NextRequest, response: NextResponse) {
    return new NextResponse(JSON.stringify(resume1), {status:200})
}
