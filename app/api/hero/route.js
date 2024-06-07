import { NextResponse } from "next/server";
import connectDB from "@/utils/db";
import Hero from "@/models/Hero";

export const GET = async (request) => {
  try {
    await connectDB();
    const heroData = await Hero.find();

    return new NextResponse(JSON.stringify(heroData), { status: 200 });
  } catch (error) {
    return new NextResponse("Error in GET api in /api/hero", {
      status: 500,
    });
  }
};

//now initially inserting data to the Hero model when no existing data available
// export const POST = async (request, { params }) => {
//   try {
//     const { title, subTitle, imgSrc, imgAlt } = await request.json();
//     await connectDB();

//     // Create a new contactHero document
//     const newContactHero = new Hero({
//       contactHero: [
//         {
//           title: title,
//           subTitle: subTitle,
//           imgSrc: imgSrc,
//           imgAlt: imgAlt,
//         },
//       ],
//     });

//     // Save the contact to the database
//     await newContactHero.save();
//   } catch (error) {
//     return new NextResponse(
//       "Error in POST api for initially inserting data in the Hero Model: /api/hero",
//       { status: 500 }
//     );
//   }
// };

//now adding data after initial input
export const POST = async (request, { params }) => {
  try {
    const { title, subTitle, imgSrc, imgAlt } = await request.json();

    await connectDB();

    // Find the existing ServicePage document
    const existingHero = await Hero.findOne();

    // Push the new data into the serviceInfo array
    existingHero.portfolioHero.push({
      title,
      subTitle,
      imgSrc,
      imgAlt,
    });

    // Save the updated document
    await existingHero.save();

    const responseBody = {
      message: "Data added in the Hero Model",
      title,
      subTitle,
      imgSrc,
      imgAlt,
    };

    return new NextResponse(JSON.stringify(responseBody), { status: 200 });
  } catch (error) {
    return new NextResponse("Error occurred in POST api in  /api/hero");
  }
};

export const PATCH = async (request, { params }) => {
  try {
    const { title, subTitle, imgSrc, imgAlt, selectedField } =
      await request.json();
    await connectDB();

    const allHeros = await Hero.find();

    if (title) {
      allHeros[0][selectedField][0].title = title;
    }
    if (subTitle) {
      allHeros[0][selectedField][0].subTitle = subTitle;
    }
    if (imgSrc || imgSrc === "") {
      allHeros[0][selectedField][0].imgSrc = imgSrc;
    }
    if (imgAlt || imgAlt === "") {
      allHeros[0][selectedField][0].imgAlt = imgAlt;
    }

    await allHeros[0].save();

    let responseBody = {
      message: "You are in PATCH api in /api/hero",
      message2: `Hero of ${selectedField} updated successfully`,
    };

    return new NextResponse(JSON.stringify(responseBody), { status: 200 });
  } catch (error) {
    return new NextResponse("Error occurred in PATCH api in /api/hero", {
      status: 500,
    });
  }
};
