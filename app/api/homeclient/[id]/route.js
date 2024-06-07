import { NextResponse } from "next/server";
import connectDB from "@/utils/db";
import HomeClient from "@/models/HomeClient";

export const POST = async (request, { params }) => {
  try {
    const { id } = params;

    const { addName, addParagraph, addCompany, addImgSource, addImgAlt } =
      await request.json();

    await connectDB();

    try {
      const existingHomeClient = await HomeClient.findOne({ _id: id });
      if (!existingHomeClient) {
        return new NextResponse("client can not be added to unknown index", {
          status: 404,
        });
      }

      // Add a new client to the clientCard array
      existingHomeClient.clientCard.push({
        name: addName,
        paragraph: addParagraph,
        company: addCompany,
        imgSource: addImgSource,
        imgAlt: addImgAlt,
      });

      // Save the updated document
      await existingHomeClient.save();
    } catch (error) {
      return new NextResponse("client can not be added to unknown index", {
        status: 404,
      });
    }

    let responseBody = {
      addName: addName,
      addParagraph: addParagraph,
      addCompany: addCompany,
      addImgSource: addImgSource,
      addImgAlt: addImgAlt,
    };

    return new NextResponse(JSON.stringify(responseBody), { status: 200 });
  } catch (error) {
    return new NextResponse(
      "Sorry, Error occurred in /api/homeclient/id post request",
      { status: 500 }
    );
  }
};

export const PATCH = async (request, { params }) => {
  try {
    await connectDB();
    const { id } = params;

    let existingData;

    try {
      existingData = await HomeClient.findById({ _id: id });
    } catch (error) {
      const errorMessage = "Invalid client ID";
      return new NextResponse(errorMessage, { status: 400 }); // code 400 is used for data not found(invalid request)
    }

    let responseBody;
    if (existingData !== null) {
      //now handle the update function here
      const {
        modelId,
        targetIndex,
        updatedName,
        updatedParagraph,
        updatedCompany,
        updatedImgSource,
        updatedImgAlt,
      } = await request.json();

      if (targetIndex !== null) {
        if (updatedParagraph !== null) {
          existingData.clientCard[targetIndex].paragraph = updatedParagraph;
        }

        if (updatedName !== null) {
          existingData.clientCard[targetIndex].name = updatedName;
        }

        if (updatedCompany !== null) {
          existingData.clientCard[targetIndex].company = updatedCompany;
        }

        if (updatedImgSource !== null) {
          existingData.clientCard[targetIndex].imgSource = updatedImgSource;
        }

        if (updatedImgAlt !== null) {
          existingData.clientCard[targetIndex].imgAlt = updatedImgAlt;
        }

        await existingData.save();
      }

      responseBody = {
        updatedClient: existingData,
        message: `${targetIndex + 1} th client`,
      };
      return new NextResponse(JSON.stringify(responseBody), { status: 200 });
    }
  } catch (error) {
    return new NextResponse(
      "Sorry, Error occurred in /api/homeclient/id patch request",
      { status: 500 }
    );
  }
};

export const DELETE = async (request, { params }) => {
  try {
    const { id } = params;
    const { targetIndex } = await request.json();

    await connectDB();
    let existingHomeClient;
    try {
      existingHomeClient = await HomeClient.findOne({ _id: id });
    } catch (error) {
      return new NextResponse("Client not found to delete", { status: 404 });
    }

    let responseBody;

    if (existingHomeClient !== null) {
      if (
        targetIndex >= 0 &&
        targetIndex < existingHomeClient?.clientCard.length
      ) {
        existingHomeClient.clientCard.splice(targetIndex, 1);
      } else {
        return new NextResponse("Invalid target index", { status: 400 });
      }
    }

    // Save the updated document
    await existingHomeClient.save();

    responseBody = {
      _id: id,
      targetIndex: targetIndex,
      message: "Client deleted successfully",
    };

    return new NextResponse(JSON.stringify(responseBody), { status: 200 });
  } catch (error) {
    return new NextResponse(
      "Sorry, Error occurred in /api/homeclient/id delete request",
      { status: 500 }
    );
  }
};
