import mongoose from "mongoose";

const aboutSchema = new mongoose.Schema(
  {
    hero: [
      {
        hero_Title: { type: String },
        hero_Subtitle: { type: String },
        hero_ButtonText: { type: String },
        hero_ImageSource: { type: String },
        hero_ImageAlt: { type: String },
      },
    ],
    section1: [
      {
        section1_Title1: { type: String },
        section1_Title2: { type: String },
        section1_Description: { type: String },
        section1_Name: { type: String },
        section1_Designation: { type: String },
        section1_ImageSource: { type: String },
        Section1_ImageAlt: { type: String },
      },
    ],
    section2: [
      {
        section2_Title: { type: String },
        section2_Subtitle: { type: String },
      },
    ],
    section2_2: [
      {
        section2_ServiceId: { type: String },
        section2_ImgSource: { type: String },
        section2_ImgAlt: { type: String },
        section2_Heading: { type: String },
      },
    ],
    section3: [
      {
        section3_Heading: { type: String },
        section3_Subtitle: { type: String },
        section3_Description1: { type: String },
        section3_Description2: { type: String },
      },
    ],
    section4: [
      {
        section4_Title: { type: String },
        section4_Description: { type: String },
        section4_Image: { type: String },
        section4_ImgAlt: { type: String },
      },
    ],
    section6: [
      {
        section6_Heading: { type: String },
        section6_SubHeading: { type: String },
      },
    ],
    section6_6: [
      {
        section6_Title: { type: String },
        section6_Description: { type: String },
        section6_Image: { type: String },
        section6_ImgAlt: { type: String },
      },
    ],
    section7: [
      {
        section7_Title: { type: String },
        section7_SubTitle: { type: String },
      },
    ],
    section7_7: [
      {
        section7_Name: { type: String },
        section7_Designation: { type: String },
        section7_Description: { type: String },
        section7_ImgSource: { type: String },
        section7_ImgAlt: { type: String },
      },
    ],
    section8: [
      {
        section8_Name: { type: String },
        section8_Designation: { type: String },
        section8_ImgSource: { type: String },
        section8_ImgAlt: { type: String },
      },
    ],
    AboutFAQSection: [
      {
        FAQ_ImgSource: { type: String },
        FAQ_ImgAlt: { type: String },
        FAQ_SubTitle: { type: String },
      },
    ],
    FAQLoop: [
      {
        question: { type: String },
        answer: { type: String },
      },
    ],
    section5_slider1: [
      {
        quantity: { type: String },
        heading: { type: String },
      },
    ],
    section5_slider2: [
      {
        quantity: { type: String },
        heading: { type: String },
      },
    ],
  },
  { timestamps: true }
);

// Check if the model already exists
const About = mongoose.models.About || mongoose.model("About", aboutSchema);

export default About;
