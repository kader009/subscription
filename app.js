import express from 'express';
const app = express();
import { PORT } from './config/index.js';
import authRouter from './routes/auth.routes.js';
import userRouter from './routes/user.routes.js';
import connectToDatabase from './database/mongodb.js';

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/users', userRouter);

app.get('/', (req, res) => {
  res.send('Welcome To Backend Api 😃');
});

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);

  connectToDatabase();
});

export default app;
