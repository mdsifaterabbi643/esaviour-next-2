import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
  {
    category: [
      {
        categoryId: { type: Number, unique: true },
        categoryName: { type: String, unique: true },
        categorySlug: { type: String, unique: true },
      },
    ],
  },
  { timestamps: true }
);

// Check if the model already exists
const Category =
  mongoose.models.Category || mongoose.model("Category", categorySchema);

export default Category;
