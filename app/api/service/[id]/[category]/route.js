import { NextResponse } from "next/server";

import connectDB from "@/utils/db";
import Service from "@/models/Service";

//extracting Service model based on category and id

export const GET = async (request, { params }) => {
  try {
    await connectDB();

    const { id, category } = params;

    const serviceData = await Service.findById({ _id: id });

    const filteredObjects = serviceData[category];

    //return new NextResponse(JSON.stringify(serviceData), { status: 200 });

    return new NextResponse(JSON.stringify(filteredObjects), { status: 200 });
  } catch (error) {
    return new NextResponse("Database error", { status: 500 });
  }
};

export const POST = async (request, { params }) => {
  try {
    const { id, category } = params;
    await connectDB();

    let responseBody;
    let existingData;

    try {
      existingData = await Service.findById({ _id: id });
    } catch (error) {
      throw new Error("Couldn't find Service model object id");
    }

    if (existingData !== null) {
      const {
        addHeading: heading,
        addDescription: description,
        addImgSrc: imgSrc,
        addImgAlt: imgAlt,
      } = await request.json();

      existingData[category].push({
        heading: heading,
        description: description,
        imgSrc: imgSrc,
        imgAlt: imgAlt,
        category: category,
      });

      await existingData.save();

      responseBody = {
        message: "You are in POST route for /api/service/${id}/${category}",
        message: "data added to Service model",
        id: id,
        key: category,
        category: category,
        heading: heading,
        description: description,
        imgSrc: imgSrc,
        imgAlt: imgAlt,
      };
    }

    return new NextResponse(JSON.stringify(responseBody), { status: 200 });
  } catch (error) {
    return new NextResponse("Couldn't add services to tabcontents", {
      status: 500,
    });
  }
};

export const DELETE = async (request, { params }) => {
  try {
    const { id, category } = params;
    const { index } = await request.json();

    await connectDB();

    let existingService;
    try {
      existingService = await Service.findById({
        _id: id,
      });
    } catch (error) {
      return new NextResponse("Couldn't find the service data to delete");
    }

    let responseBody;

    if (existingService !== null) {
      if (index >= 0 && index < existingService?.[category].length) {
        existingService[category].splice(index, 1);
      } else {
        return new NextResponse("Invalid target index", { status: 400 });
      }
    }

    //save after deletion
    await existingService.save();

    responseBody = {
      message: "service deleted successfully",
    };

    return new NextResponse(JSON.stringify(responseBody), { status: 200 });
  } catch (error) {
    return new NextResponse("Data can not be deleted", { status: 500 });
  }
};
