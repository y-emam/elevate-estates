import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("MongoDB is already connected");

    return;
  }

  try {
    const mongoUri = process.env.MONGO_URI;
    if (!mongoUri) {
      throw new Error("MONGO_URI is not defined in the environment variables");
    }

    await mongoose.connect(mongoUri, {
      dbName: "yasuo",
    });

    isConnected = true;

    console.log("MongoDB is connected");
  } catch (err) {
    console.log(err);
  }
};
