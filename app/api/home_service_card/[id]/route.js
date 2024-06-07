import { NextResponse } from "next/server";
import connectDB from "@/utils/db";
import HomeServiceCard from "@/models/HomeServiceCard";

export const PATCH = async (request, { params }) => {
  try {
    await connectDB();
    const { id } = params;

    const HomeServiceCardData = await HomeServiceCard.findById({
      _id: id,
    });

    let responseBody;

    if (HomeServiceCardData !== null) {
      const { heading, paragraph, image, imageAlt, targetCard } =
        await request.json();

      if (heading) {
        HomeServiceCardData.cardContents[targetCard].heading = heading;
      }
      if (paragraph) {
        HomeServiceCardData.cardContents[targetCard].paragraph = paragraph;
      }

      if (image) {
        HomeServiceCardData.cardContents[targetCard].image = image;
      }

      if (imageAlt) {
        HomeServiceCardData.cardContents[targetCard].imageAlt = imageAlt;
      }

      //save the updated HomeServiceCardData
      await HomeServiceCardData.save();

      responseBody = {
        message: `HomeServiceCard model data updated successfully: ${id}`,
        heading1: heading,
        paragraph1: paragraph,
        targetCard,
      };
    }

    responseBody = {
      message: `HomeServiceCard model data updated successfully: ${id}`,
    };

    return new NextResponse(JSON.stringify(responseBody), { status: 200 });
  } catch (error) {
    return new NextResponse(
      "HomeServiceCard model data not found for the given ID",
      {
        status: 500,
      }
    );
  }
};

export const POST = async (request, { params }) => {
  try {
    const { id } = params;

    const {
      addHeading: heading,
      addParagraph: paragraph,
      addImage: image,
      addImageAlt: imageAlt,
    } = await request.json();

    await connectDB();

    try {
      const existingHomeServiceCard = await HomeServiceCard.findById({
        _id: id,
      });

      if (!existingHomeServiceCard) {
        return new NextResponse(
          "Couldn't find the proper index to add service card",
          { status: 404 }
        );
      }

      existingHomeServiceCard.cardContents.push({
        heading: heading,
        paragraph: paragraph,
        image: image,
        imageAlt: imageAlt,
      });

      //save the new document
      await existingHomeServiceCard.save();
    } catch (error) {
      return new NextResponse(
        "Couldn't find the proper index to add service card",
        { status: 404 }
      );
    }

    let responseBody = {
      message: `homeServiceCard added successfully`,
      heading: heading,
      paragraph: paragraph,
      image: image,
      imageAlt: imageAlt,
    };
    return new NextResponse(JSON.stringify(responseBody), { status: 200 });
  } catch (error) {
    return new NextResponse("Could not added service card", { status: 500 });
  }
};

export const DELETE = async (request, { params }) => {
  try {
    const { id } = params;
    const { targetCard } = await request.json();

    await connectDB();
    let existingHomeServiceCard;
    try {
      existingHomeServiceCard = await HomeServiceCard.findById({
        _id: id,
      });
    } catch (error) {
      return new NextResponse("Couldn't find the service card to delete");
    }

    let responseBody;

    if (existingHomeServiceCard !== null) {
      if (
        targetCard >= 0 &&
        targetCard < existingHomeServiceCard?.cardContents.length
      ) {
        existingHomeServiceCard.cardContents.splice(targetCard, 1);
      } else {
        return new NextResponse("Invalid target index", { status: 400 });
      }
    }

    //save after deletion
    await existingHomeServiceCard.save();

    responseBody = {
      message: "service card deleted successfully",
    };

    return new NextResponse(JSON.stringify(responseBody), { status: 200 });
  } catch (error) {
    return new NextResponse("Couldn't delete the service card");
  }
};
