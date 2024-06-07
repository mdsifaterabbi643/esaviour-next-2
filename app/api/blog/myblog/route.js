import { NextResponse } from "next/server";
import connectDB from "@/utils/db";
import Blog from "@/models/Blog";
import Category from "@/models/Category";

export const GET = async (request) => {
  try {
    await connectDB();

    const blogData = await Blog.find();

    let responseBody = {
      message: "Hello world and Moon",
      blogData: blogData,
    };

    return new NextResponse(JSON.stringify(responseBody), { status: 200 });
  } catch (error) {
    return new NextResponse("Error occurred", { status: 200 });
  }
};

//for initially adding data to the Blog model
export const POST = async (request) => {
  try {
    await connectDB();
    const {
      blogId,
      bannerTitle,
      category,
      imageSource,
      alt,
      bodyTitle,
      bodyDescription,
      blogDate,
    } = await request.json();

    //required fields are: bannerTitle, category, bodyTitle, bodyDescription, blogId

    // Create a new blog entry when no data exists in the Model
    //const newBlogData = await Blog.create({}); //this will create an empty array of object

    const newBlogData = await Blog.find();
    const allCategories = await Category.find();

    //validating required fields are not empty
    if (
      bannerTitle === "" ||
      category === "" ||
      bodyTitle === "" ||
      bodyDescription === "" ||
      blogId === ""
    ) {
      return new NextResponse("Required fields can't left empty", {
        status: 500,
      });
    }

    //validating required fields are not missing
    if (
      !bannerTitle ||
      !category ||
      !bodyTitle ||
      !bodyDescription ||
      !blogId
    ) {
      return new NextResponse("Required fields are missing", {
        status: 500,
      });
    }

    //validating unique fields (bannerTitle and bodyTitle)
    if (bannerTitle.lenght > 0) {
      const duplicateTitle = newBlogData[0].article.find((item) => {
        return item.bannerTitle === bannerTitle;
      });
      if (duplicateTitle) {
        return new NextResponse("This bannerTitle already exists", {
          status: 400,
        });
      }
    }

    if (bodyTitle.length > 0) {
      const duplicateTitle = newBlogData[0].article.find((item) => {
        return item.bodyTitle === bodyTitle;
      });
      if (duplicateTitle) {
        return new NextResponse("This bodytitle already exists", {
          status: 400,
        });
      }
    }

    //validating unique fields (blogId)
    if (blogId) {
      const duplicateBlogId = newBlogData[0].article.find((item) => {
        return item.blogId === blogId;
      });
      if (duplicateBlogId) {
        return new NextResponse("duplicate Blog Id ", {
          status: 400,
        });
      }
    }

    //validating the category is present in the category Model or not
    if (category) {
      const searchValidCategory = allCategories[0].category.find((item) => {
        return item.categoryName === category;
      });
      if (!searchValidCategory) {
        return new NextResponse("Category not valid", {
          status: 200,
        });
      }
    }

    //now creating categorySlug from category
    let slug;
    if (category) {
      // Remove any leading/trailing spaces
      const trimmedCategory = category.trim();
      // Replace spaces with underscores
      slug = trimmedCategory.replace(/\s+/g, "_").toLowerCase();
    }

    newBlogData[0].article.push({
      bannerTitle: bannerTitle,
      category: category,
      bodyTitle: bodyTitle,
      bodyDescription: bodyDescription,
      categorySlug: slug,
      imageSource: imageSource,
      alt: alt,
      blogDate: blogDate,
      blogId: blogId,
    });

    await newBlogData[0].save();

    let responseBody = {
      bannerTitle: bannerTitle,
      category: category,
      bodyTitle: bodyTitle,
      bodyDescription: bodyDescription,
      categorySlug: slug,
      imageSource: imageSource,
      alt: alt,
      blogDate: blogDate,
      blogId: blogId,
    };
    return new NextResponse(JSON.stringify(responseBody), { status: 200 });
  } catch (error) {
    return new NextResponse("Couldn't add to Blog Model", {
      status: 500,
    });
  }
};

export const PATCH = async (request, { params }) => {
  try {
    const {
      targetIndex,
      bannerTitle,
      category,
      imageSource,
      alt,
      bodyTitle,
      bodyDescription,
      blogDate,
      blogId,
    } = await request.json();

    await connectDB();

    const allBlogs = await Blog.find();
    const allCategories = await Category.find();
    let targetBlog = allBlogs[0].article[targetIndex];

    if (bannerTitle) {
      //validating unique fields (bannerTitle)
      const duplicateBannerTitle = allBlogs[0].article.find((item, index) => {
        return index !== targetIndex && item.bannerTitle === bannerTitle;
      });

      if (duplicateBannerTitle) {
        return new NextResponse("This bannerTitle already exists", {
          status: 400,
        });
      }

      allBlogs[0].article[targetIndex].bannerTitle = bannerTitle;
    }
    if (category) {
      //verify valid category from Category model
      //validating the category is present in the category Model or not
      const searchValidCategory = allCategories[0].category.find((item) => {
        return item.categoryName === category;
      });

      if (!searchValidCategory) {
        return new NextResponse("Category not valid", {
          status: 404,
        });
      }

      allBlogs[0].article[targetIndex].category = category;

      //also updating categorySlug based on category
      // Remove any leading/trailing spaces
      const trimmedCategory = category.trim();
      // Replace spaces with underscores
      const slug = trimmedCategory.replace(/\s+/g, "_").toLowerCase();
      allBlogs[0].article[targetIndex].categorySlug = slug;
    }
    if (imageSource) {
      allBlogs[0].article[targetIndex].imageSource = imageSource;
    }
    if (alt) {
      allBlogs[0].article[targetIndex].alt = alt;
    }
    
    if (bodyTitle) {
      // validating unique bodyTitle
      //validating unique fields (bannerTitle)
      const duplicateBodyTitle = allBlogs[0].article.find((item, index) => {
        return index !== targetIndex && item.bodyTitle === bodyTitle;
      });

      if (duplicateBodyTitle) {
        return new NextResponse("This bodytitle already exists", {
          status: 400,
        });
      }

      allBlogs[0].article[targetIndex].bodyTitle = bodyTitle;
    }
    if (bodyDescription) {
      allBlogs[0].article[targetIndex].bodyDescription = bodyDescription;
    }
    if (blogDate) {
      allBlogs[0].article[targetIndex].blogDate = blogDate;
    }
    if (blogId) {
      allBlogs[0].article[targetIndex].blogId = blogId;
    }

    await allBlogs[0].save();

    let responseBody = {
      message: "You are in PATCH api in /api/blog/myblog",
      targetBlog: targetBlog,
    };

    return new NextResponse(JSON.stringify(responseBody), { status: 200 });
  } catch (error) {
    return new NextResponse(
      "Error occurred in PATCH method in /api/blog/myblog",
      { status: 400 }
    );
  }
};

export const DELETE = async (request, { params }) => {
  try {
    const { targetIndex } = await request.json();
    await connectDB();

    const existingBlogs = await Blog.find();

    //delete here
    existingBlogs[0].article.splice(targetIndex, 1);

    // Save the updated document
    await existingBlogs[0].save();

    let responseBody = {
      targetIndex: targetIndex,
      message: "Blog Deleted successfully",
    };

    return new NextResponse(JSON.stringify(responseBody), { status: 200 });
  } catch (error) {
    return new NextResponse(
      "Error occurrent in DELETE api in /api/blog/myblog",
      { status: 500 }
    );
  }
};
