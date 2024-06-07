import mongoose from "mongoose";

const homeClientSchema = new mongoose.Schema(
  {
    clientCard: [
      {
        id: { type: String },
        imgSource: { type: String },
        imgAlt: { type: String },
        paragraph: { type: String },
        name: { type: String },
        company: { type: String },
      },
    ],
  },
  { timestamps: true }
);

// Check if the model already exists
const HomeClient =
  mongoose.models.HomeClient || mongoose.model("HomeClient", homeClientSchema);

export default HomeClient;
