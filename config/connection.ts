import mongoose from "mongoose";
export default async function connectDb() {
  try {
    await mongoose.connect(process.env.DB_URI as string);
  } catch (error) {
    console.log("DB CONNECTION FAILED", error);
  }
}
