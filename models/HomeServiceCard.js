import mongoose from "mongoose";

const homeServiceCardSchema = new mongoose.Schema(
  {
    cardContents: [
      {
        id: { type: String },
        image: { type: String },
        heading: { type: String },
        paragraph: { type: String },
        imageAlt: { type: String },
      },
    ],
  },
  { timestamps: true }
);

// Check if the model already exists
const HomeServiceCard =
  mongoose.models.HomeServiceCard ||
  mongoose.model("HomeServiceCard", homeServiceCardSchema);

export default HomeServiceCard;
