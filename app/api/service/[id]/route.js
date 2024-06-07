import { NextResponse } from "next/server";

import connectDB from "@/utils/db";
import Service from "@/models/Service";

//extracting Service model based on category and id

// export const GET = async (request, { params }) => {
//   try {
//     await connectDB();

//     const { id, category } = params;

//     const serviceData = await Service.findById({ _id: id });

//     const filteredObjects = serviceData[category];

//     //return new NextResponse(JSON.stringify(serviceData), { status: 200 });

//     return new NextResponse(JSON.stringify(filteredObjects), { status: 200 });
//   } catch (error) {
//     return new NextResponse("Database error", { status: 500 });
//   }
// };

export const PATCH = async (request, { params }) => {
  try {
    await connectDB();

    const { id } = params;

    const serviceData = await Service.findById({
      _id: "66405d6de2473c6e3e189159",
    });

    let responseBody;

    if (serviceData) {
      //const { newHeading, category, index } = await request.json();

      const requestData = await request.json(); // Await the JSON data

      const {
        newHeading,
        category,
        index,
        newDescription,
        newImgSrc,
        newImgAlt,
      } = requestData;

      if (newHeading) {
        //   serviceData.[category[index]].heading = newHeading;
        serviceData[category][index].heading = newHeading; // Corrected line
        serviceData[category][index].description = newDescription;
        serviceData[category][index].imgSrc = newImgSrc;
        serviceData[category][index].imgAlt = newImgAlt;
      }

      //save the updated data
      await serviceData.save();

      responseBody = {
        message: `Service model data updated successfully: ${id}`,
        heading: newHeading,
        description: newDescription,
        imgSrc: newImgSrc,
      };
    }

    return new NextResponse(JSON.stringify(responseBody), { status: 200 });
  } catch (error) {
    return new NextResponse("Service model data not found for the given ID**", {
      status: 500,
    });
  }
};
