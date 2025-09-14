import dotenv from 'dotenv';
const envFile = `.env.${process.env.NODE_ENV || 'development'}.local`;
console.log('Loading env file:', envFile); // check which file it is loading
dotenv.config({ path: envFile });

export const { PORT, MONGODB_URL, NODE_ENV, JWT_SECRET, JWT_EXPIRES_IN } = process.env;

console.log('MONGODB_URL:', MONGODB_URL); // check if it's loaded
