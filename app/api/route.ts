import { NextResponse } from "next/server";

export async function GET() {
    try {
        return NextResponse.json({ message: 'API home page is working' });
      } catch (error) {
        return NextResponse.json({ message: 'Error connecting to the API', error }, { status: 500 });
      }
}