import { NextResponse } from "next/server";

import connectDB from "@/utils/db";
import HomeServiceCard from "@/models/HomeServiceCard";

export const GET = async (request) => {
  //fetch

  try {
    await connectDB();

    const homeServiceCardData = await HomeServiceCard.find();

    return new NextResponse(JSON.stringify(homeServiceCardData), {
      status: 200,
    });
  } catch (error) {
    return new NextResponse("Database error", { status: 500 });
  }
};
