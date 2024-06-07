import { NextResponse } from "next/server";
import connectDB from "@/utils/db";
import About from "@/models/About";

export const PATCH = async (request, { params }) => {
  try {
    const { id } = params;

    const {
      hero_Title,
      hero_Subtitle,
      hero_ButtonText,
      hero_ImageSource,
      hero_ImageAlt,
      section1_Title1,
      section1_Title2,
      section1_Description,
      section1_Name,
      section1_Designation,
      section1_ImageSource,
      Section1_ImageAlt,
      section2_Title,
      section2_Subtitle,
      targetIndex,
      targetSection,
      section2_Heading,
      section2_ImgSource,
      section2_ImgAlt,
      section3_Heading,
      section3_Subtitle,
      section3_Description1,
      section3_Description2,
      targetIndex4Section4,
      section4_Title,
      section4_Description,
      section4_Image,
      section4_ImgAlt,
      section6_Heading,
      section6_SubHeading,
      section6_Title,
      section6_Description,
      section6_Image,
      section6_ImgAlt,
      section7_Title,
      section7_SubTitle,
      section7_Name,
      section7_Designation,
      section7_Description,
      section7_ImgSource,
      section7_ImgAlt,
      section8_Name,
      section8_Designation,
      section8_ImgSource,
      section8_ImgAlt,
      FAQ_SubTitle,
      FAQ_ImgSource,
      FAQ_ImgAlt,
      question,
      answer,
    } = await request.json();

    await connectDB();

    try {
      const existingData = await About.findById({ _id: id });

      if (!existingData) {
        return new NextResponse(
          "Couldn't find the proper index to update About hero date",
          { status: 404 }
        );
      }

      if (hero_Title) {
        existingData.hero[0].hero_Title = hero_Title;
      }
      if (hero_Subtitle) {
        existingData.hero[0].hero_Subtitle = hero_Subtitle;
      }
      if (hero_ButtonText) {
        existingData.hero[0].hero_ButtonText = hero_ButtonText;
      }
      if (hero_ImageSource) {
        existingData.hero[0].hero_ImageSource = hero_ImageSource;
      }
      if (hero_ImageAlt) {
        existingData.hero[0].hero_ImageAlt = hero_ImageAlt;
      }
      if (section1_Title1) {
        existingData.section1[0].section1_Title1 = section1_Title1;
      }
      if (section1_Title2) {
        existingData.section1[0].section1_Title2 = section1_Title2;
      }
      if (section1_Description) {
        existingData.section1[0].section1_Description = section1_Description;
      }
      if (section1_Name) {
        existingData.section1[0].section1_Name = section1_Name;
      }
      if (section1_Designation) {
        existingData.section1[0].section1_Designation = section1_Designation;
      }
      if (section1_ImageSource) {
        existingData.section1[0].section1_ImageSource = section1_ImageSource;
      }
      if (Section1_ImageAlt) {
        existingData.section1[0].Section1_ImageAlt = Section1_ImageAlt;
      }
      if (section2_Title) {
        existingData.section2[0].section2_Title = section2_Title;
      }
      if (section2_Subtitle) {
        existingData.section2[0].section2_Subtitle = section2_Subtitle;
      }

      if (section2_Heading) {
        existingData[targetSection][targetIndex].section2_Heading =
          section2_Heading[targetIndex];
      }
      if (section2_ImgSource) {
        existingData[targetSection][targetIndex].section2_ImgSource =
          section2_ImgSource[targetIndex];
      }

      if (section2_ImgAlt) {
        existingData[targetSection][targetIndex].section2_ImgAlt =
          section2_ImgAlt[targetIndex];
      }

      if (section3_Heading) {
        existingData.section3[0].section3_Heading = section3_Heading;
      }
      if (section3_Subtitle) {
        existingData.section3[0].section3_Subtitle = section3_Subtitle;
      }
      if (section3_Description1) {
        existingData.section3[0].section3_Description1 = section3_Description1;
      }
      if (section3_Description2) {
        existingData.section3[0].section3_Description2 = section3_Description2;
      }

      if (section4_Title) {
        existingData[targetSection][targetIndex4Section4].section4_Title =
          section4_Title[targetIndex4Section4];
      }

      if (section4_Description) {
        existingData[targetSection][targetIndex4Section4].section4_Description =
          section4_Description[targetIndex4Section4];
      }

      if (section4_Image) {
        existingData[targetSection][targetIndex4Section4].section4_Image =
          section4_Image[targetIndex4Section4];
      }

      if (section4_ImgAlt) {
        existingData[targetSection][targetIndex4Section4].section4_ImgAlt =
          section4_ImgAlt[targetIndex4Section4];
      }

      if (section6_Heading) {
        existingData.section6[0].section6_Heading = section6_Heading;
      }

      if (section6_SubHeading) {
        existingData.section6[0].section6_SubHeading = section6_SubHeading;
      }
      if (section6_Title) {
        existingData[targetSection][targetIndex].section6_Title =
          section6_Title[targetIndex];
      }
      if (section6_Description) {
        existingData[targetSection][targetIndex].section6_Description =
          section6_Description[targetIndex];
      }
      if (section6_Image) {
        existingData[targetSection][targetIndex].section6_Image =
          section6_Image[targetIndex];
      }
      if (section6_ImgAlt) {
        existingData[targetSection][targetIndex].section6_ImgAlt =
          section6_ImgAlt[targetIndex];
      }
      if (section7_Title) {
        existingData.section7[0].section7_Title = section7_Title;
      }
      if (section7_SubTitle) {
        existingData.section7[0].section7_SubTitle = section7_SubTitle;
      }
      if (section7_Name) {
        existingData[targetSection][targetIndex].section7_Name =
          section7_Name[targetIndex];
      }
      if (section7_Designation) {
        existingData[targetSection][targetIndex].section7_Designation =
          section7_Designation[targetIndex];
      }
      if (section7_Description) {
        existingData[targetSection][targetIndex].section7_Description =
          section7_Description[targetIndex];
      }
      if (section7_ImgSource) {
        existingData[targetSection][targetIndex].section7_ImgSource =
          section7_ImgSource[targetIndex];
      }
      if (section7_ImgAlt) {
        existingData[targetSection][targetIndex].section7_ImgAlt =
          section7_ImgAlt[targetIndex];
      }

      if (section8_Name) {
        existingData[targetSection][targetIndex].section8_Name =
          section8_Name[targetIndex];
      }

      if (section8_Designation) {
        existingData[targetSection][targetIndex].section8_Designation =
          section8_Designation[targetIndex];
      }

      if (section8_ImgSource) {
        existingData[targetSection][targetIndex].section8_ImgSource =
          section8_ImgSource[targetIndex];
      }

      if (section8_ImgAlt) {
        existingData[targetSection][targetIndex].section8_ImgAlt =
          section8_ImgAlt[targetIndex];
      }

      if (FAQ_SubTitle) {
        existingData.AboutFAQSection[0].FAQ_SubTitle = FAQ_SubTitle;
      }

      if (FAQ_ImgSource) {
        existingData.AboutFAQSection[0].FAQ_ImgSource = FAQ_ImgSource;
      }

      if (FAQ_ImgAlt) {
        existingData.AboutFAQSection[0].FAQ_ImgAlt = FAQ_ImgAlt;
      }

      if (question) {
        existingData[targetSection][targetIndex].question =
          question[targetIndex];
      }

      if (answer) {
        existingData[targetSection][targetIndex].answer = answer[targetIndex];
      }

      await existingData.save();
    } catch (error) {
      return new NextResponse(
        "Couldn't find the proper index to Update About Data",
        { status: 404 }
      );
    }

    const responseBody = {
      message: "data updated successfully in the About model",
      hero_Title: hero_Title,
      hero_Subtitle: hero_Subtitle,
      hero_ButtonText: hero_ButtonText,
      hero_ImageSource: hero_ImageSource,
      hero_ImageAlt: hero_ImageAlt,
      section1_Title1: section1_Title1,
      section1_Title2: section1_Title2,
      section1_Description: section1_Description,
      section1_Name: section1_Name,
      section1_Designation: section1_Designation,
      section1_ImageSource: section1_ImageSource,
      Section1_ImageAlt: Section1_ImageAlt,
    };

    return new NextResponse(JSON.stringify(responseBody), { status: 200 });
  } catch (error) {
    return new NextResponse("Couldn't add to the service data", {
      status: 500,
    });
  }
};

export const POST = async (request, { params }) => {
  try {
    const { id } = params;
    const { addHeading, addImgSource, addImgAlt } = await request.json();
    await connectDB();

    try {
      const existingData = await About.findById({ _id: id });
      if (!existingData) {
        return new NextResponse(
          "Not found the existing data to be added in the About model",
          { status: 404 }
        );
      }

      //adding items to section2_2
      existingData.section2_2.push({
        section2_Heading: addHeading,
        section2_ImgSource: addImgSource,
        section2_ImgAlt: addImgAlt,
      });

      await existingData.save();
    } catch (error) {
      return new NextResponse(
        "Not found the existing data to be added in the About model",
        { status: 404 }
      );
    }

    let responseBody = {
      section2_Heading: addHeading,
      section2_ImgSource: addImgSource,
      section2_ImgAlt: addImgAlt,
    };

    return new NextResponse(JSON.stringify(responseBody), { status: 200 });
  } catch (error) {
    return new NextResponse(
      "Error occurrent in POST method in /api/about/update/[id]",
      { status: 500 }
    );
  }
};

export const DELETE = async (request, { params }) => {
  try {
    const { id } = params;
    const { targetIndex } = await request.json();
    await connectDB();

    let existingData;

    try {
      existingData = await About.findOne({ _id: id });
    } catch (error) {
      return new NextResponse("Not Found to delete", { status: 404 });
    }
    let responseBody;

    if (existingData !== null) {
      if (targetIndex >= 0 && targetIndex < existingData?.section2_2.length) {
        existingData.section2_2.splice(targetIndex, 1);
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
    return new NextResponse(
      "Error occurred in DELETE method in api/about/update/[id]"
    );
  }
};
