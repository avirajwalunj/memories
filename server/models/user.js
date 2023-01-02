import mongoose from "mongoose";
const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, require: true },
  id: { type: String },
});

export default mongoose.model("User", userSchema);
