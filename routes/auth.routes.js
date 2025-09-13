import {Router} from 'express';

const authRouter = Router();

authRouter.post('/sing-up', (req, res) => {
  // Handle login logic here
  res.send('Login endpoint');
});
authRouter.post('/sing-in', (req, res) => {
  // Handle login logic here
  res.send('Login endpoint');
});
authRouter.post('/sing-out', (req, res) => {
  // Handle login logic here
  res.send('Login endpoint');
});

export default authRouter;