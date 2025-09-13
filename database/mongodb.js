import mongoose from 'mongoose';
import { MONGODB_URL, NODE_ENV } from '../config/index.js';

if (!MONGODB_URL) {
  throw new Error('MONGODB_URL is not defined in environment variables');
}

const connectToDatabase = async () => {
  try {
    await mongoose.connect(MONGODB_URL);
    if (NODE_ENV !== 'test') {
      console.log('Connected to MongoDB');
    }
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
};

export default connectToDatabase;
