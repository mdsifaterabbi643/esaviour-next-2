import { NextResponse } from "next/server";
import connectDB from "@/utils/db";
import Blog from "@/models/Blog";
import Category from "@/models/Category";

//finding blogs based on categorySlug
export const POST = async (request, { params }) => {
  try {
    // const { category } = params;
    const { categorySlug } = params;
    await connectDB();

    const allBlogs = await Blog.find();

    // Find all blogs that match the specified categorySlug
    const blogsInCategory = allBlogs[0]?.article.filter(
      (blog) => blog.categorySlug === categorySlug
    );

    let responseBody = {
      categorySlug: categorySlug,
      blogsInCategory: blogsInCategory,
    };

    return new NextResponse(JSON.stringify(responseBody), { status: 200 });
  } catch (error) {
    return new NextResponse(
      "Error occurred in /api/blog/categoryWiseBlog POST method",
      { status: 500 }
    );
  }
};
