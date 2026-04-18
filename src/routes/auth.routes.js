import express from "express";
import {
    signiNController,
    signUpController,
} from "../controllers/auth.controllers.js";

// -- route create --
const authRoute = express.Router();

// -- api endpoints --
authRoute.post("/sign-up", signUpController).post("/sign-in", signiNController);

export default authRoute;
