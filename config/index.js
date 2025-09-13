import { config } from 'dotenv';
const options = { path: `.env.${process.env.NODE_ENV || 'development'}.local` };
config(options);

export const { PORT, MONGODB_URL, NODE_ENV } = process.env;
