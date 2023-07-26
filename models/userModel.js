// created after config folder
import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
      // to remove whilte spaces
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      requires: true,
    },
    phone: {
      type: String,
      requires: true,
    },
    address: {
      type: {},
      requires: true,
    },
    answer: {
      type: String,
      required: true,
    },
    role: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
); //new user add hoga to us ka created time add ho jye ga wahan

export default mongoose.model("users", userSchema);
// created before authRoute.js
