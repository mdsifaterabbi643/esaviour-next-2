import mongoose from "mongoose";

const heroSchema = new mongoose.Schema(
  {
    contactHero: [
      {
        title: { type: String },
        subTitle: { type: String },
        imgSrc: { type: String },
        imgAlt: { type: String },
        createdAt: { type: Date, default: Date.now },
        updatedAt: { type: Date, default: Date.now },
      },
    ],
    blogHero: [
      {
        title: { type: String },
        subTitle: { type: String },
        imgSrc: { type: String },
        imgAlt: { type: String },
        createdAt: { type: Date, default: Date.now },
        updatedAt: { type: Date, default: Date.now },
      },
    ],
    servicePageHero: [
      {
        title: { type: String },
        subTitle: { type: String },
        imgSrc: { type: String },
        imgAlt: { type: String },
        createdAt: { type: Date, default: Date.now },
        updatedAt: { type: Date, default: Date.now },
      },
    ],
    portfolioHero: [
      {
        title: { type: String },
        subTitle: { type: String },
        imgSrc: { type: String },
        imgAlt: { type: String },
        createdAt: { type: Date, default: Date.now },
        updatedAt: { type: Date, default: Date.now },
      },
    ],
  },
  { timestamps: true }
);

// Check if the model already exists
const Hero = mongoose.models.Hero || mongoose.model("Hero", heroSchema);

export default Hero;
