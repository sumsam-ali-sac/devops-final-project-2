import express from "express";
import { deleteUser } from "../controllers/user.controller.js";
const userRouter = express.Router();

userRouter.delete("/delete", deleteUser);

export default userRouter;
