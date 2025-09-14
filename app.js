import express from 'express';
import cookieParser from 'cookie-parser';
import { PORT } from './config/index.js';
import authRouter from './routes/auth.routes.js';
import userRouter from './routes/user.routes.js';
import connectToDatabase from './database/mongodb.js';
import errorMiddleware from './middleware/errod.middleware.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/users', userRouter);

app.use(errorMiddleware);

app.get('/', (req, res) => {
  res.send('Welcome To Backend Api 😃');
});

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);

  connectToDatabase();
});

export default app;
