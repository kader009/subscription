import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, 'User name is required'],
      trim: true,
      minlength: [3, 'User name must be at least 3 characters long'],
      maxlength: [30, 'User name must be at most 30 characters long'],
    },
    email: { type: String, required: [true, 'User email is required'], unique: true, trim: true, lowercase:true, match: [/.+\@.+\..+/, 'Please fill a valid email address'] },
    password: { type: String, required: true, trim:true },
  },
  { timestamps: true }
);
const User = mongoose.model('User', userSchema);

export default User;
