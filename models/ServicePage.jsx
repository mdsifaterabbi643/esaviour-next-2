import mongoose from "mongoose";

const servicePageSchema = new mongoose.Schema(
  {
    serviceInfo: [
      {
        serviceName: { type: String },
        serviceHeading: { type: String },
        serviceImageSource: { type: String },
        serviceImageAlt: { type: String },
        bullet: [
          {
            bulletPoint: { type: String },
            bulletDescription: { type: String },
          },
        ],
        conclusion: { type: String },
        createdAt: { type: Date, default: Date.now },
        updatedAt: { type: Date, default: Date.now() },
      },
    ],
  },
  { timestamps: true }
);

//Check if the model already exists
const ServicePage =
  mongoose.models.ServicePage ||
  mongoose.model("ServicePage", servicePageSchema);

export default ServicePage;
