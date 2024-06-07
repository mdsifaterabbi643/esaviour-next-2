import { NextResponse } from "next/server";

import connectDB from "@/utils/db";
import Home from "@/models/Home";

export const GET = async (request) => {
  //fetch

  try {
    await connectDB();

    const homeData = await Home.find();

    return new NextResponse(JSON.stringify(homeData), { status: 200 });
  } catch (error) {
    return new NextResponse("Database error", { status: 500 });
  }
};
