import mongoose from "mongoose";

const connectDatabase = () => {
    mongoose.connect(process.env.DB_LOCAL_URI).then((con) => {
        console.log("Successfully connected to database");
    });
}

export default connectDatabase;