import mongoose from "mongoose";

mongoose
  .connect("mongodb://127.0.0.1:27017/yt-pg-1")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("Error in connecting", err));

const userSchema = new mongoose.Schema(
    {
      firstName: {
        type: String,
        required: true,
      },
  
      lastName: {
        type: String,
      },
  
      gender: {
        type: String,
        required: true,
      },
  
      email: {
        type: String,
        required: true,
        unique: true,
      },
      jobTitle: {
        type: String,
        required: true
      }
    }, { timestamps: true });

    const user = mongoose.model("User", userSchema);

    module.exports = user