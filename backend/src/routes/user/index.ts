// express
import express from "express";

// controller
import UserController from "../../controllers/user";

// middlewares
import authGuard from "../../middlewares/validation/authGuard";

// validation
import validate from "../../middlewares/validation";
import {
	userCreateValidation,
	userLoginValidation,
	userSendPasswordResetEmailValidation,
	userUpdateProfileValidation,
} from "../../middlewares/validation/user";

// types
import { Router } from "express";

// router
const router: Router = express.Router();

// routes
router.get("/currentUser", authGuard, UserController.getUserDetails);

router.post(
	"/sign-up",
	userCreateValidation(),
	validate,
	UserController.signUp
);

router.post("/sign-in", userLoginValidation(), validate, UserController.signIn);

router.post(
	"/fogot-password",
	userSendPasswordResetEmailValidation(),
	validate,
	UserController.sendPasswordResetEmail
);

router.post("/sign-in-with-google", UserController.signInWithGoogle);

router.put(
	"/update-profile/:id",
	authGuard,
	userUpdateProfileValidation(),
	validate,
	UserController.updateUserProfile
);

export { router as userRouter };
