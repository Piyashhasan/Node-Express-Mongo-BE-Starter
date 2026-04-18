import mongoose from "mongoose";

const connectionDB = async () => {
    try {
        const connectionEstablished = await mongoose.connect(
            process.env.MONGO_DB_URI
        );

        console.log("✅ MongoDB connected");

        return connectionEstablished;
    } catch (error) {
        console.error("❌ MongoDB connection error:", error.message);
        process.exit(1);
    }
};

export default connectionDB;
