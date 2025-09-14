import { Router } from 'express';
import { getUser, getUsers } from '../controllers/user.controllers.js';
import authorize from '../middleware/auth.middleware.js';

const userRouter = Router();

userRouter.get('/', getUsers);

userRouter.get('/:id', authorize, getUser);

userRouter.post('/', (req, res) => {
  // Handle updating user logic here
  res.send('User endpoint');
});

userRouter.put('/:id', (req, res) => {
  // Handle updating user logic here
  res.send('User endpoint');
});

userRouter.delete('/:id', (req, res) => {
  // Handle deleting user logic here
  res.send('User endpoint');
});

export default userRouter;
