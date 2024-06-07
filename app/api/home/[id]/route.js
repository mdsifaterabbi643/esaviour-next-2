import { NextResponse } from "next/server";
import connectDB from "@/utils/db";
import Home from "@/models/Home";

export const PATCH = async (request, { params }) => {
  try {
    await connectDB();
    const { id } = params;

    const homeModelData = await Home.findById({ _id: id });

    let responseBody;

    if (homeModelData !== null) {
      const {
        title: title,
        subtitle: subtitle,
        description: description,
        buttonText: buttonText,
        IP1: introPara1,
        IP2: introPara2,
        IP3: introPara3,
        imageLink: introImgSource,
        imgAlt: introImgAlt,
        bannerText: bannerText,
        imgSource: imgSource,
        imgAlt: imgAlt,
      } = await request.json();

      if (title) {
        homeModelData.title = title;
      }

      if (subtitle) {
        homeModelData.subtitle = subtitle;
      }

      if (description) {
        homeModelData.description = description;
      }

      if (buttonText) {
        homeModelData.buttonText = buttonText;
      }

      if (imgSource) {
        homeModelData.imgSource = imgSource;
      }
      if (imgAlt) {
        homeModelData.imgAlt = imgAlt;
      }

      if (introPara1) {
        homeModelData.introPara1 = introPara1;
      }

      if (introPara2) {
        homeModelData.introPara2 = introPara2;
      }

      if (introPara3) {
        homeModelData.introPara3 = introPara3;
      }

      if (introImgSource) {
        homeModelData.introImgSource = introImgSource;
      }
      if (introImgAlt) {
        homeModelData.introImgAlt = introImgAlt;
      }
      if (bannerText) {
        homeModelData.bannerText = bannerText;
      }

      // Save the updated homeModelData
      await homeModelData.save();

      responseBody = {
        message: `home model data updated for id: ${id}`,
      };
    }

    return new NextResponse(JSON.stringify(responseBody), { status: 200 });
  } catch (error) {
    return new NextResponse("Home model data not found for the given ID", {
      status: 500,
    });
  }
};
