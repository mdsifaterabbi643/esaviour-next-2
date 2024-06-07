import { NextResponse } from "next/server";

import connectDB from "@/utils/db";
import ServicePage from "@/models/ServicePage";

export const GET = async (request) => {
  //fetch

  try {
    await connectDB();

    const servicePageData = await ServicePage.find();

    return new NextResponse(JSON.stringify(servicePageData), { status: 200 });
  } catch (error) {
    return new NextResponse("Database error", { status: 500 });
  }
};

//initially inserting data in the ServicePage Model
// export const POST = async (request, { params }) => {
//   try {
//     const {
//       serviceName,
//       serviceHeading,
//       serviceImageSource,
//       serviceImageAlt,
//       bullet,
//       conclusion,
//     } = await request.json();

//     await connectDB();

//     // Create a new contact document
//     const newServicePage = new ServicePage({
//       serviceInfo: [
//         {
//           serviceName,
//           serviceHeading,
//           serviceImageSource,
//           serviceImageAlt,
//           bullet,
//           conclusion,
//         },
//       ],
//     });

//     // Save the contact to the database
//     await newServicePage.save();

//     const responseBody = {
//       message: "Data added initially in the ServicePage Model",
//       serviceName,
//       serviceHeading,
//       serviceImageSource,
//       serviceImageAlt,
//       bullet,
//       conclusion,
//     };

//     return new NextResponse(JSON.stringify(responseBody), { status: 200 });
//   } catch (error) {
//     return new NextResponse(
//       "Error in POST api for initially inserting data in the Servicepage Model: /api/servicepage",
//       { status: 500 }
//     );
//   }
// };

//now adding data after initial input
export const POST = async (request, { params }) => {
  try {
    const {
      serviceName,
      serviceHeading,
      serviceImageSource,
      serviceImageAlt,
      bullet,
      conclusion,
    } = await request.json();

    await connectDB();

    // Find the existing ServicePage document
    const existingServicePage = await ServicePage.findOne();

    // Push the new data into the serviceInfo array
    existingServicePage.serviceInfo.push({
      serviceName,
      serviceHeading,
      serviceImageSource,
      serviceImageAlt,
      bullet,
      conclusion,
    });

    // Save the updated document
    await existingServicePage.save();

    const responseBody = {
      message: "Data added in the ServicePage Model",
      serviceName: serviceName,
      serviceHeading: serviceHeading,
      serviceImageSource: serviceImageSource,
      serviceImageAlt: serviceImageAlt,
      bullet: bullet,
      conclusion,
    };

    return new NextResponse(JSON.stringify(responseBody), { status: 200 });
  } catch (error) {
    return new NextResponse("Error occurred in POST api in  /api/servicepage");
  }
};
