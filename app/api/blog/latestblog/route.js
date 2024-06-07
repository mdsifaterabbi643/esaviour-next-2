import { NextResponse } from "next/server";
import connectDB from "@/utils/db";
import Blog from "@/models/Blog";

export const GET = async (request) => {
  try {
    await connectDB();

    //this is an aggregate query used in Mongodb to query array of objects as a seperate documents
    const latestBlogs = await Blog.aggregate([
      // Unwind the article array to treat each article as a separate document
      { $unwind: "$article" },
      // Sort by createdAt field in descending order
      { $sort: { "article.createdAt": -1 } },
      // Group the articles back into an array
      {
        $group: {
          _id: "$_id",
          articles: { $push: "$article" },
        },
      },
      // Limit the results to 3 articles
      { $project: { _id: 0, articles: { $slice: ["$articles", 3] } } },
    ]);

    const responseBody = {
      message: "Latest blogs",
      articles: latestBlogs[0]?.articles || [],
    };

    return new NextResponse(JSON.stringify(responseBody), { status: 200 });
  } catch (error) {
    return new NextResponse("Error in GET api in /api/blog/latestblog", {
      status: 500,
    });
  }
};
