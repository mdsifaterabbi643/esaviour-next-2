import { NextResponse } from "next/server";
import connectDB from "@/utils/db";
import Contact from "@/models/Contact";

export const GET = async (request) => {
  try {
    await connectDB();
    const contactData = await Contact.find();

    return new NextResponse(JSON.stringify(contactData), { status: 200 });
  } catch (error) {
    return new NextResponse("Error in GET api in /api/contact", {
      status: 500,
    });
  }
};

//initially inserting data in the Contact Model
// export const POST = async (request, { params }) => {
//   try {
//     const { country, address, phone, email } = await request.json();

//     await connectDB();

//     // Create a new contact document
//     const newContact = new Contact({
//       contactInfo: [{ country, address, phone, email }],
//     });

//     // Save the contact to the database
//     await newContact.save();

//     const responseBody = {
//       message: "Data added initially in the Contact Model",
//       country,
//       address,
//       phone,
//       email,
//     };

//     return new NextResponse(JSON.stringify(responseBody), { status: 200 });
//   } catch (error) {
//     return new NextResponse(
//       "Error in POST api for initially inserting data in the Contact Model: /api/contact",
//       { status: 500 }
//     );
//   }
// };

// now adding data after initial input
export const POST = async (request, { params }) => {
  try {
    const { country, address, phone, email } = await request.json();

    await connectDB();

    const newContactData = await Contact.find();

    //validating required fields are not empty
    if (country === "" || address === "") {
      return new NextResponse("Required fields can't left empty", {
        status: 500,
      });
    }

    //validating required fields are not missing
    if (!country || !address) {
      return new NextResponse("Required fields are missing", {
        status: 500,
      });
    }

    newContactData[0].contactInfo.push({
      country: country,
      address: address,
      phone: phone,
      email: email,
    });

    await newContactData[0].save();

    const responseBody = {
      message: "Data added in the Contact Model",
      country,
      address,
      phone,
      email,
    };

    return new NextResponse(JSON.stringify(responseBody), { status: 200 });
  } catch (error) {
    return new NextResponse(
      "Error in POST api for initially inserting data in the Contact Model: /api/contact",
      { status: 500 }
    );
  }
};

export const PATCH = async (request, { params }) => {
  try {
    const { targetIndex, country, address, phone, email } =
      await request.json();

    await connectDB();

    const allContacts = await Contact.find();

    if (country) {
      allContacts[0].contactInfo[targetIndex].country = country;
    }
    if (address) {
      allContacts[0].contactInfo[targetIndex].address = address;
    }
    if (phone) {
      allContacts[0].contactInfo[targetIndex].phone = phone;
    }
    if (email) {
      allContacts[0].contactInfo[targetIndex].email = email;
    }

    await allContacts[0].save();

    let responseBody = {
      message: "You are in PATCH api in /api/contact",
      targetIndex: targetIndex,
    };

    return new NextResponse(JSON.stringify(responseBody), { status: 200 });
  } catch (error) {
    return new NextResponse("Error occurred in PATCH api in /api/contact", {
      status: 500,
    });
  }
};

export const DELETE = async (request, { params }) => {
  try {
    const { targetIndex } = await request.json();

    const findData = await Contact.find();

    //delete here
    findData[0].contactInfo.splice(targetIndex, 1);

    // Save the updated document
    await findData[0].save();

    let responseBody = {
      message: `Deleted index ${targetIndex} `,
    };

    return new NextResponse(JSON.stringify(responseBody), { status: 200 });
  } catch (error) {
    return new NextResponse("Error in DELETE api in /api/contact", {
      status: 500,
    });
  }
};
