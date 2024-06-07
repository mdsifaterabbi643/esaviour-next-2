import { NextResponse } from "next/server";

import connectDB from "@/utils/db";
import ServicePage from "@/models/ServicePage";

export const PATCH = async (request, { params }) => {
  try {
    const { targetIndex, bulletIndex } = params;
    await connectDB();

    const parsedTargetIndex = parseInt(targetIndex, 10);
    const parsedBulletIndex = parseInt(bulletIndex, 10);

    let existingData;
    try {
      existingData = await ServicePage.find();
    } catch (error) {
      return new NextResponse("No data found in ServicePage model", {
        status: 400,
      }); // code 404 is used for data not found(invalid request)
    }

    let responseBody;

    if (existingData !== null) {
      const { bulletPoint, bulletDescription } = await request.json();

      if (bulletPoint !== null) {
        existingData[0].serviceInfo[parsedTargetIndex].bullet[
          parsedBulletIndex
        ].bulletPoint = bulletPoint;
      }
      if (bulletDescription !== null) {
        existingData[0].serviceInfo[parsedTargetIndex].bullet[
          parsedBulletIndex
        ].bulletDescription = bulletDescription;
      }

      await existingData[0].save();
    }

    responseBody = {
      message: `ServicePage model updated`,
    };

    return new NextResponse(JSON.stringify(responseBody), { status: 200 });
  } catch (error) {
    return new NextResponse(
      "Error occurred in PATCH api in /api/servicepage/[targetIndex]/[bulletIndex]",
      { status: 500 }
    );
  }
};
