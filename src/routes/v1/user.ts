import {Router} from "express";
import {userProtected, validate} from "../../modules/middlewares"
import * as yup from "yup"
import UserController from "../../controllers/UserController";

const router = Router()

router
    .get(
        "/",
        userProtected,
        validate({
            query: {
                limit: yup.number().required().min(1).max(100),
                page: yup.number().required().min(1)
            }
        }),
        UserController.listUsers,
    )

export default router