import { NextResponse, NextRequest } from "next/server";

let downloadlink: string = "";

export function POST(request: NextRequest, response: NextResponse) {
  const data = request.body;
  downloadlink = String(data);
}

export function GET(request: NextRequest,) {
    return new NextResponse(downloadlink, {status:200})
}
