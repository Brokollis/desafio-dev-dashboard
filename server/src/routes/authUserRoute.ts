import { createUserController, getAllUsersController, getUserToLoginController } from "../controllers/authUserController";
import { Router } from "express";

const userRouter = Router();

userRouter.post("/login", getUserToLoginController);
userRouter.post("/users", createUserController);
userRouter.get("/users", getAllUsersController);


export default userRouter;