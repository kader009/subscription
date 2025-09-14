import { Router } from 'express';
import { getUser, getUsers } from '../controllers/user.controllers.js';
import authorize from '../middleware/auth.middleware.js';

const userRouter = Router();

userRouter.get('/', getUsers);

userRouter.get('/:id', authorize, getUser);

export default userRouter;
