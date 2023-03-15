// express
import express from "express";

// controller
import UserController from "../../controllers/user";

// middlewares
    // validation
import validate from "../../middlewares/validation";
import { userCreateValidation } from "../../middlewares/validation/user";
// types
import { Router } from "express";

// router
const router: Router = express.Router();

// routes
router.post("/sign-up",
    userCreateValidation(),
    validate,
    UserController.signUp
);


export { router as userRouter };