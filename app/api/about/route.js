import { NextResponse } from "next/server";
import connectDB from "@/utils/db";
import About from "@/models/About";

export const GET = async (request) => {
  try {
    await connectDB();

    const aboutData = await About.find();

    return new NextResponse(JSON.stringify(aboutData), { status: 200 });
  } catch (error) {
    return new NextResponse("Database error", { status: 500 });
  }
};

//for initially adding data to the About model
// export const POST = async (request) => {
//   try {
//     await connectDB();
//     const { quantity, heading } = await request.json();

//     const id = "664c644887ef8bfa15d4b665";

//     try {
//       //const newData = new About();

//       const newData = await About.findById({ _id: id });

//       newData.section5_slider2.push({
//         quantity: quantity,
//         heading: heading,
//       });

//       await newData.save();

//       const responseBody = {
//         quantity: quantity,
//         heading: heading,
//       };

//       return new NextResponse(JSON.stringify(responseBody), { status: 200 });
//     } catch (error) {
//       return new NextResponse(
//         "Couldn't find the proper index to add About section5_slider2",
//         { status: 404 }
//       );
//     }
//   } catch (error) {
//     return new NextResponse("Couldn't add to the about data section5_slider2", {
//       status: 500,
//     });
//   }
// };
