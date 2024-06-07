import { NextResponse } from "next/server";

import connectDB from "@/utils/db";
import Service from "@/models/Service";

export const GET = async (request) => {
  //fetch

  try {
    await connectDB();

    const serviceData = await Service.find();

    return new NextResponse(JSON.stringify(serviceData), { status: 200 });
  } catch (error) {
    return new NextResponse("Database error", { status: 500 });
  }
};
