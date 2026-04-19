import mongoose from "mongoose";
import { DB_NAME } from "../constant";

const connectionDB = async () => {
    try {
        // -- use it for Mongo Atlas configuration --
        // const connection = await mongoose.connect(
        //     `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.w46pkek.mongodb.net/${DB_NAME}?appName=Cluster0`
        // );

        // -- use it for local development configuration --
        const connectionEstablished = await mongoose.connect(
            `${process.env.MONGO_DB_URI}/${DB_NAME}`
        );

        console.log("✅ MongoDB connected");

        return connectionEstablished;
    } catch (error) {
        console.error("❌ MongoDB connection error:", error.message);
        process.exit(1);
    }
};

export default connectionDB;
