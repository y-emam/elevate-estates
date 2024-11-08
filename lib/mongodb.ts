import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
  try {
    mongoose.set("strictQuery", true);

    if (isConnected) {
      console.log("MongoDB is already connected");

      return;
    }

    const mongo_uri = process.env.MONGO_URI;
    if (mongo_uri === undefined || mongo_uri === "") {
      throw new Error("MONGO_URI is not defined");
    }

    await mongoose.connect(mongo_uri);

    isConnected = true;

    console.log("MongoDB is connected");
  } catch (err) {
    console.log(err);
  }
};
