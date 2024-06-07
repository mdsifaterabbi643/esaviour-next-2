import { NextResponse } from "next/server";
import connectDB from "@/utils/db";
import Footer from "@/models/Footer";

export const GET = async (request) => {
  //fetch

  try {
    await connectDB();

    const footerData = await Footer.find();

    return new NextResponse(JSON.stringify(footerData), { status: 200 });
  } catch (error) {
    return new NextResponse("Database error", { status: 500 });
  }
};

//initiall inserting data when the Footer model is empty
// export const POST = async (request, { params }) => {
//   try {
//     const {
//       imgSrc,
//       imgAlt,
//       paragraph,
//       buttonText,
//       stat,
//       heading,
//       logo,
//       description,
//       qlink,
//       legalLink,
//       socialImgSrc,
//       socialImgAlt,
//       paymentImgSrc,
//       paymentImgAlt,
//     } = await request.json();
//     await connectDB();
//     // Create a new contact document
//     const newFooterData = new Footer({
//       footer1Upper: [
//         {
//           imgSrc: imgSrc,
//           imgAlt: imgAlt,
//         },
//       ],
//       footer1Lower: [
//         {
//           paragraph: paragraph,
//           buttonText: buttonText,
//         },
//       ],
//       footer2Upper: [
//         {
//           stat: stat,
//           heading: heading,
//         },
//       ],
//       footer2LowerLeft: [
//         {
//           logo: logo,
//           description: description,
//         },
//       ],
//       footer2QuickLink: [
//         {
//           qlink: qlink,
//         },
//       ],
//       footer2Legal: [
//         {
//           legalLink: legalLink,
//         },
//       ],
//       footer2SocialIcons: [
//         {
//           socialImgSrc: socialImgSrc,
//           socialImgAlt: socialImgAlt,
//         },
//       ],
//       footer2PaymentIcons: [
//         {
//           paymentImgSrc: paymentImgSrc,
//           paymentImgAlt: paymentImgAlt,
//         },
//       ],
//     });
//     // Save the contact to the database
//     await newFooterData.save();

//     const responseBody = {
//       message: "Data added initially in the Footer Model",
//       imgSrc,
//       imgAlt,
//       paragraph,
//       buttonText,
//       stat,
//       heading,
//       logo,
//       description,
//       qlink,
//       legalLink,
//       socialImgSrc,
//       socialImgAlt,
//       paymentImgSrc,
//       paymentImgAlt,
//     };

//     return new NextResponse(JSON.stringify(responseBody), { status: 200 });
//   } catch (error) {
//     return new NextResponse(
//       "Error in POST api for initially inserting data in the Footer Model: /api/footer",
//       { status: 500 }
//     );
//   }
// };

//inserting data in Footer model after initil input
export const POST = async (request, { params }) => {
  try {
    const { legalLink, legalHref } = await request.json();

    await connectDB();

    // Find the existing Footer document
    const existingFooter = await Footer.findOne();

    // Push the new data into the serviceInfo array
    existingFooter.footer2Legal.push({
      legalLink: legalLink,
      legalHref: legalHref,
    });

    // Save the updated document
    await existingFooter.save();

    const responseBody = {
      message: "Data added in the Footer Model",
      legalLink: legalLink,
      legalHref: legalHref,
    };

    return new NextResponse(JSON.stringify(responseBody), { status: 200 });
  } catch (error) {
    return new NextResponse("Error occurred in POST api in  /api/footer");
  }
};

export const PATCH = async (request, { params }) => {
  try {
    const {
      imgSrc,
      imgAlt,
      targetIndex,
      selectedField,
      paragraph,
      buttonText,
      stat,
      heading,
      logo,
      description,
      qlink,
      qHref,
      legalLink,
      legalHref,
      socialImgSrc,
      socialImgAlt,
      socialLink,
      paymentImgSrc,
      paymentImgAlt,
      paymentLink,
    } = await request.json();

    await connectDB();

    const footerData = await Footer.find();

    if (imgSrc) {
      footerData[0][selectedField][targetIndex].imgSrc = imgSrc;
    }
    if (imgAlt) {
      footerData[0][selectedField][targetIndex].imgAlt = imgAlt;
    }
    if (paragraph) {
      footerData[0][selectedField][0].paragraph = paragraph;
    }
    if (buttonText) {
      footerData[0][selectedField][0].buttonText = buttonText;
    }
    if (stat) {
      footerData[0][selectedField][targetIndex].stat = stat;
    }
    if (heading) {
      footerData[0][selectedField][targetIndex].heading = heading;
    }
    if (logo) {
      footerData[0][selectedField][0].logo = logo;
    }
    if (description) {
      footerData[0][selectedField][0].description = description;
    }
    if (qlink) {
      footerData[0][selectedField][targetIndex].qlink = qlink;
    }
    if (qHref) {
      footerData[0][selectedField][targetIndex].qHref = qHref;
    }
    if (legalLink) {
      footerData[0][selectedField][targetIndex].legalLink = legalLink;
    }
    if (legalHref) {
      footerData[0][selectedField][targetIndex].legalHref = legalHref;
    }
    if (socialImgSrc) {
      footerData[0][selectedField][targetIndex].socialImgSrc = socialImgSrc;
    }
    if (socialImgAlt) {
      footerData[0][selectedField][targetIndex].socialImgAlt = socialImgAlt;
    }
    if (socialLink) {
      footerData[0][selectedField][targetIndex].socialLink = socialLink;
    }
    if (paymentImgSrc) {
      footerData[0][selectedField][targetIndex].paymentImgSrc = paymentImgSrc;
    }
    if (paymentImgAlt) {
      footerData[0][selectedField][targetIndex].paymentImgAlt = paymentImgAlt;
    }
    if (paymentLink) {
      footerData[0][selectedField][targetIndex].paymentLink = paymentLink;
    }

    await footerData[0].save();

    let responseBody = {
      message: "Footer model updated",
      imgSrc: imgSrc,
      imgAlt: imgAlt,
      targetIndex: targetIndex,
      paragraph,
      buttonText,
      stat,
      heading,
      logo,
      description,
      qlink,
      qHref,
      legalLink,
      legalHref,
      socialImgSrc,
      socialImgAlt,
      socialLink,
      paymentImgSrc,
      paymentImgAlt,
      paymentLink,
    };

    return new NextResponse(JSON.stringify(responseBody), { status: 200 });
  } catch (error) {
    return new NextResponse("Error occurred in PATCH api in /api/footer", {
      status: 500,
    });
  }
};
