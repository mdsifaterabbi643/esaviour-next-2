import { NextResponse } from "next/server";
import About from "@/models/About";
import connectDB from "@/utils/db";

export const POST = async (request, { params }) => {
  try {
    const { id } = params;
    const { newQuestion: question, newAnswer: answer } = await request.json();
    await connectDB();

    let existingData;
    let responseBody;
    try {
      existingData = await About.findOne({ _id: id });

      //push to add data in the about model
      existingData.FAQLoop.push({
        question: question,
        answer: answer,
      });

      //save the changes
      await existingData.save();

      responseBody = {
        id: id,
        question: question,
        answer: answer,
      };
    } catch (error) {
      return new NextResponse("Not found valid index to add data", {
        status: 404,
      });
    }

    return new NextResponse(JSON.stringify(responseBody), { status: 200 });
  } catch (error) {
    return new NextResponse(
      "Error occurred in POST method in /api/about/faq/[id]"
    );
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
