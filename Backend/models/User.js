import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  referralCode: String,
  referredBy: String,
  score: { type: Number, default: 0 },
});

export default mongoose.model('User', userSchema);