import { NextResponse } from "next/server";

import connectDB from "@/utils/db";
import ServicePage from "@/models/ServicePage";

export const GET = async (request, { params }) => {
  //fetch

  try {
    await connectDB();

    const { targetIndex } = params;

    const servicePageData = await ServicePage.find();
    const bullet = servicePageData[0]?.serviceInfo[targetIndex].bullet;

    return new NextResponse(JSON.stringify(bullet), { status: 200 });
  } catch (error) {
    return new NextResponse("Database error", { status: 500 });
  }
};

export const PATCH = async (request, { params }) => {
  try {
    const { targetIndex } = params;
    await connectDB();
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
      const {
        serviceName,
        serviceHeading,
        serviceImageSource,
        serviceImageAlt,
        conclusion,
      } = await request.json();

      if (serviceName !== null) {
        existingData[0].serviceInfo[targetIndex].serviceName = serviceName;
      }
      if (serviceHeading !== null) {
        existingData[0].serviceInfo[targetIndex].serviceHeading =
          serviceHeading;
      }
      if (serviceImageSource !== null) {
        existingData[0].serviceInfo[targetIndex].serviceImageSource =
          serviceImageSource;
      }
      if (serviceImageAlt !== null) {
        existingData[0].serviceInfo[targetIndex].serviceImageAlt =
          serviceImageAlt;
      }
      if (conclusion !== null) {
        existingData[0].serviceInfo[targetIndex].conclusion = conclusion;
      }

      await existingData[0].save();
    }

    responseBody = {
      message: `ServicePage model updated`,
    };
    return new NextResponse(JSON.stringify(responseBody), { status: 200 });
  } catch (error) {
    return new NextResponse(
      "Error in PATCH api in /api/servicepage/[targetIndex]",
      { status: 500 }
    );
  }
};

export const DELETE = async (request, { params }) => {
  try {
    const { targetIndex } = params;
    await connectDB();

    let existingServicePage;

    try {
      existingServicePage = await ServicePage.find();
    } catch (error) {
      return new NextResponse("Client not found to delete", { status: 404 });
    }

    let responseBody;

    if (existingServicePage[0] !== null) {
      if (
        targetIndex >= 0 &&
        targetIndex < existingServicePage[0]?.serviceInfo.length
      ) {
        existingServicePage[0].serviceInfo.splice(targetIndex, 1);
      } else {
        return new NextResponse("Invalid target index", { status: 400 });
      }
    }

    // Save the updated document
    await existingServicePage[0].save();

    responseBody = {
      targetIndex: targetIndex,
      message: "ServicePage data deleted successfully",
    };

    return new NextResponse(JSON.stringify(responseBody), { status: 200 });
  } catch (error) {
    return new NextResponse("Error in deleting ServicePage model data", {
      status: 500,
    });
  }
};
