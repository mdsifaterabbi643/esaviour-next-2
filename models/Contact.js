import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
  {
    contactInfo: [
      {
        country: { type: String, required: true },
        address: { type: String, required: true },
        phone: { type: String },
        email: { type: String },
        createdAt: { type: Date, default: Date.now },
        updatedAt: { type: Date, default: Date.now },
      },
    ],
  },
  { timestamps: true }
);

// Check if the model already exists
const Contact =
  mongoose.models.Contact || mongoose.model("Contact", contactSchema);

export default Contact;
