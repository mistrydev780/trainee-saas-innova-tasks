import express from "express";
import { getMe, getUser, getUsers, logout, signin, signup } from "../controllers/auth.controller.js";
import checkAuth from "../middlewares/checkAuth.js";

const authRouter = express.Router();

authRouter.post("/signup", signup);

authRouter.post("/signin", signin);

authRouter.post("/logout", logout);

authRouter.get("/users", getUsers);

authRouter.get("/user/:id", getUser);

authRouter.get("/me", checkAuth, getMe);


export default authRouter;