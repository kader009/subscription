import { Router } from "express";

const userRouter = Router();

userRouter.get("/", (req, res) => {
  // Handle fetching user logic here
  res.send("User endpoint");
});
userRouter.get("/:id", (req, res) => {
  // Handle fetching user logic here
  res.send("User endpoint");
});
userRouter.post("/", (req, res) => {
  // Handle updating user logic here
  res.send("User endpoint");
});
userRouter.put("/:id", (req, res) => {
  // Handle updating user logic here
  res.send("User endpoint");
});
userRouter.delete("/:id", (req, res) => {
  // Handle deleting user logic here
  res.send("User endpoint");
});

export default userRouter;