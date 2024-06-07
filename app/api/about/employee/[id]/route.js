import { NextResponse } from "next/server";
import connectDB from "@/utils/db";
import About from "@/models/About";

export const POST = async (request, { params }) => {
  try {
    const { id } = params;
    const {
      employeeName,
      employeeDesignation,
      employeeImgSrc,
      employeeImgAlt,
    } = await request.json();
    await connectDB();

    try {
      const existingData = await About.findById({ _id: id });
      if (!existingData) {
        return new NextResponse(
          "Not found the existing data to be added in the About model",
          { status: 404 }
        );
      }

      //adding employee items to section8
      existingData.section8.push({
        section8_Name: employeeName,
        section8_Designation: employeeDesignation,
        section8_ImgSource: employeeImgSrc,
        section8_ImgAlt: employeeImgAlt,
      });

      await existingData.save();
    } catch (error) {
      return new NextResponse(
        "Not found the existing data to be added in the About model",
        { status: 404 }
      );
    }

    let responseBody = {
      section8_Name: employeeName,
      section8_Designation: employeeDesignation,
      section8_ImgSource: employeeImgSrc,
      section8_ImgAlt: employeeImgAlt,
    };

    return new NextResponse(JSON.stringify(responseBody), { status: 200 });
  } catch (error) {
    return new NextResponse("Error occurred in /api/about/employee/[id] api");
  }
};

export const DELETE = async (request, { params }) => {
  try {
    const { id } = params;
    const { targetIndex, targetSection } = await request.json();
    await connectDB();

    let existingData;
    try {
      existingData = await About.findOne({ _id: id });
    } catch (error) {
      return new NextResponse("Not Found to delete", { status: 404 });
    }
    let responseBody;

    if (existingData !== null) {
      if (
        targetIndex >= 0 &&
        targetIndex < existingData[targetSection].length
      ) {
        existingData[targetSection].splice(targetIndex, 1);
      } else {
        return new NextResponse("Invalid target index", { status: 400 });
      }
    }
    // Save the updated document
    await existingData.save();

    responseBody = {
      _id: id,
      targetIndex: targetIndex,
      message: "Deleted successfully",
    };

    return new NextResponse(JSON.stringify(responseBody), { status: 200 });
  } catch (error) {
    return new NextResponse("Error occurred in /api/about/employee/[id] api");
  }
};
