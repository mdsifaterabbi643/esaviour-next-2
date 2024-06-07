import { NextResponse } from "next/server";
import connectDB from "@/utils/db";
import HomeClient from "@/models/HomeClient";

export const GET = async (request) => {
  try {
    await connectDB();

    const clientData = await HomeClient.find();

    return new NextResponse(JSON.stringify(clientData), { status: 200 });
  } catch (error) {
    return new NextResponse("Database error", { status: 500 });
  }
};

