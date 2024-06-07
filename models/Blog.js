import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    article: [
      {
        blogId: { type: Number, unique: true },
        bannerTitle: { type: String, unique: true, required: true },
        category: { type: String, required: true },
        categorySlug: { type: String },
        imageSource: { type: String },
        alt: { type: String },
        bodyTitle: { type: String, required: true, unique: true },
        bodyDescription: { type: String, required: true },
        blogDate: { type: String },
        createdAt: { type: Date, default: Date.now },
        updatedAt: { type: Date, default: Date.now },
      },
    ],
  },
  { timestamps: true }
);

// Check if the model already exists
const Blog = mongoose.models.Blog || mongoose.model("Blog", blogSchema);

export default Blog;
