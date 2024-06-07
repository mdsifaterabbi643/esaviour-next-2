import mongoose from "mongoose";

const homeSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    subtitle: {
      type: String,
    },
    description: {
      type: String,
    },
    buttonText: {
      type: String,
    },
    imgSource: {
      type: String,
    },
    imgAlt: {
      type: String,
    },
    bannerText: {
      type: String,
    },
    introPara1: {
      type: String,
    },
    introPara2: {
      type: String,
    },
    introPara3: {
      type: String,
    },
    introImgSource: {
      type: String,
    },
    introImgAlt: {
      type: String,
    },
  },
  { timestamps: true }
);

// Check if the model already exists
const Home = mongoose.models.Home || mongoose.model("Home", homeSchema);

export default Home;
