import { NextResponse } from "next/server";
import connectDB from "@/utils/db";
import Blog from "@/models/Blog";
import Category from "@/models/Category";

//finding single blog based on blogId
export const POST = async (request, { params }) => {
  try {
    const { blogId } = params; 
    await connectDB();

    // Convert blogId to a number
    const myBlogId = parseInt(blogId, 10);

    const allBlogs = await Blog.find();

    // Find the blog with the specified blogId
    const singleBlog = allBlogs[0]?.article.find((item, index) =>
      item.blogId === myBlogId ? item : ""
    );

    if (!singleBlog) {
      return new NextResponse("Blog not found***", { status: 404 });
    }

    let responseBody = {
      blogId: myBlogId,
      singleBlog: singleBlog,
    };

    return new NextResponse(JSON.stringify(responseBody), { status: 200 });
  } catch (error) {
    return new NextResponse(
      "Error occurred in /api/blog/[blogId] POST method",
      { status: 500 }
    );
  }
};
