import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema(  
  {
    amazonFBA: [
      {
        category: { type: String },
        imgSrc: { type: String },
        imgAlt: { type: String },
        description: { type: String },
        heading: { type: String },
      },
    ],
    digitalMarketing: [
      {
        category: { type: String },
        imgSrc: { type: String },
        imgAlt: { type: String },
        description: { type: String },
        heading: { type: String },
      },
    ],
    graphicsDesign: [
      {
        category: { type: String },
        imgSrc: { type: String },
        imgAlt: { type: String },
        description: { type: String },
        heading: { type: String },
      },
    ],
    webDevelopment: [
      {
        category: { type: String },
        imgSrc: { type: String },
        imgAlt: { type: String },
        description: { type: String },
        heading: { type: String },
      },
    ],
  },
  { timestamps: true }
);

// Check if the model already exists
const Service =
  mongoose.models.Service || mongoose.model("Service", serviceSchema);

export default Service;
