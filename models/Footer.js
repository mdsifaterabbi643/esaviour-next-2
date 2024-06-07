import mongoose from "mongoose";

const footerSchema = new mongoose.Schema(
  {
    footer1Upper: [
      {
        imgSrc: { type: String },
        imgAlt: { type: String },
        createdAt: { type: Date, default: Date.now },
        updatedAt: { type: Date, default: Date.now },
      },
    ],
    footer1Lower: [
      {
        paragraph: { type: String },
        buttonText: { type: String },
        createdAt: { type: Date, default: Date.now },
        updatedAt: { type: Date, default: Date.now },
      },
    ],
    footer2Upper: [
      {
        stat: { type: String },
        heading: { type: String },
        createdAt: { type: Date, default: Date.now },
        updatedAt: { type: Date, default: Date.now },
      },
    ],
    footer2LowerLeft: [
      {
        logo: { type: String },
        description: { type: String },
        createdAt: { type: Date, default: Date.now },
        updatedAt: { type: Date, default: Date.now },
      },
    ],
    footer2QuickLink: [
      {
        qlink: { type: String },
        qHref: { type: String },
        createdAt: { type: Date, default: Date.now },
        updatedAt: { type: Date, default: Date.now },
      },
    ],
    footer2Legal: [
      {
        legalLink: { type: String },
        legalHref: { type: String },
        createdAt: { type: Date, default: Date.now },
        updatedAt: { type: Date, default: Date.now },
      },
    ],
    footer2SocialIcons: [
      {
        socialImgSrc: { type: String },
        socialImgAlt: { type: String },
        socialLink: { type: String },
        createdAt: { type: Date, default: Date.now },
        updatedAt: { type: Date, default: Date.now },
      },
    ],
    footer2PaymentIcons: [
      {
        paymentImgSrc: { type: String },
        paymentImgAlt: { type: String },
        paymentLink: { type: String },
        createdAt: { type: Date, default: Date.now },
        updatedAt: { type: Date, default: Date.now },
      },
    ],
  },
  { timestamps: true }
);

// Check if the model already exists
const Footer = mongoose.models.Footer || mongoose.model("Footer", footerSchema);

export default Footer;
