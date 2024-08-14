import mongoose from "mongoose"

export const connectdb = async () => {
    await mongoose.connect("mongodb+srv://Himanshi:4436@cluster0.secwh.mongodb.net/freshfeast")
    console.log("DB Connected");
}