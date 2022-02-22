import mongoose from "mongoose";
import uniqueValidator from 'mongoose-unique-validator';

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      lowercase: true,
      match: [/^[a-zA-Z0-9]+$/, "is invalid"],
    },
    email: {
      type: String,
      required: [true, "can't be blank"],
      lowercase: true,
      match: [/\S+@\S+\.\S+/, "is invalid"],
      unique: true,
    },

    unregisteredAt: { type: Date },
  },
  { timestamps: true }
);

UserSchema.plugin(uniqueValidator, { message: 'is already taken.'})

const User = mongoose.model("User", UserSchema);
export default User;
