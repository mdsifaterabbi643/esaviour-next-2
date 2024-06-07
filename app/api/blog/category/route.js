import { NextResponse } from "next/server";
import connectDB from "@/utils/db";
import Category from "@/models/Category";

// get all categories
export const GET = async (request) => { 
  try {
    await connectDB();
    const categoryData = await Category.find();

    return new NextResponse(JSON.stringify(categoryData), { status: 200 });
  } catch (error) {
    return new NextResponse("Database error", { status: 500 });
  }
};

//for adding data to the Category model
export const POST = async (request) => {
  try {
    await connectDB();
    const { categoryId, categoryName } = await request.json();

    //const newData = new Category();
    //const id = "66546ba8bf1363ddd2e42d0e";

    //const newData = await Category.findById({ _id: id });
    const newData = await Category.find();

    //check duplicate categoryId, categoryName or categorySlug before pushing (adding) to the database

    const existingCategory = newData[0].category.find((item) => {
      return (
        item.categoryId === categoryId || item.categoryName === categoryName
      );
    });

    if (existingCategory) {
      return new NextResponse("Category with this ID or name already exists", {
        status: 400,
      });
    }

    //now creating categorySlug
    // Remove any leading/trailing spaces
    const trimmedCategory = categoryName.trim();
    // Replace spaces with underscores
    const slug = trimmedCategory.replace(/\s+/g, "_").toLowerCase();

    let responseBody;

    newData[0].category.push({
      categoryId: categoryId,
      categoryName: categoryName,
      categorySlug: slug,
    });
    await newData[0].save();

    responseBody = {
      categoryId: categoryId,
      categoryName: categoryName,
      categorySlug: slug,
    };

    return new NextResponse(JSON.stringify(responseBody), { status: 200 });
  } catch (error) {
    return new NextResponse("Couldn't add to Category Model", {
      status: 500,
    });
  }
};

export const PATCH = async (request, { params }) => {
  try {
    const { targetIndex, categoryName } = await request.json();
    await connectDB();

    const availableCategories = await Category.find();
    const totalCategories = availableCategories[0].category.length;

    if (targetIndex + 1 > totalCategories) {
      return new NextResponse("Category Not found", { status: 404 });
    }

    if (categoryName) {
      availableCategories[0].category[targetIndex].categoryName = categoryName;

      //now creating categorySlug based on new categoryName
      // Remove any leading/trailing spaces
      const trimmedCategory = categoryName.trim();
      // Replace spaces with underscores
      const slug = trimmedCategory.replace(/\s+/g, "_").toLowerCase();

      availableCategories[0].category[targetIndex].categorySlug = slug;

      availableCategories[0].save();
    }

    let responseBody = {
      targetIndex: targetIndex,
      availableCategories: availableCategories[0].category[targetIndex],
      totalCategories: totalCategories,
    };

    return new NextResponse(JSON.stringify(responseBody), { status: 200 });
  } catch (error) {
    return new NextResponse("Couldn't update Category data", {
      status: 500,
    });
  }
};

export const DELETE = async (request, { params }) => {
  try {
    const { targetIndex } = await request.json();
    await connectDB();

    const existingCategory = await Category.find();
    const totalCategories = existingCategory[0].category.length;

    if (targetIndex + 1 > totalCategories) {
      return new NextResponse("Not found the target index", { status: 404 });
    }

    //now delete the category
    existingCategory[0].category.splice(targetIndex, 1);
    existingCategory[0].save();

    let responseBody = {
      message: "Category Deleted successfully",
    };

    return new NextResponse(JSON.stringify(responseBody), { status: 200 });
  } catch (error) {
    return new NextResponse(
      "Error occurred in DELETE api in /api/blog/category"
    );
  }
};
