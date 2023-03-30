import {Router} from "express";
import {validate} from "../../modules/middlewares"
import AuthenticationController from "../../controllers/AuthenticationController";
import * as yup from "yup"

const router = Router()

router
    .post(
        "/sign-in",
        validate({
            body: {
                email: yup.string().email().required(),
                password: yup.string().trim().min(8).required(),
            },
        }),
        AuthenticationController.signIn,
    )

    .post(
        "/sign-up",
        validate({
            body: {
                email: yup.string().email().required(),
                password: yup.string().trim().min(8).required(),
                confirm_password: yup.string().trim().min(8).equals([yup.ref("password")]).required(),
            },
        }),
        AuthenticationController.signUp,
    )

export default router