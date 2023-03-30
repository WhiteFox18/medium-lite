import {Router} from "express";
import {userProtected, validate} from "../../modules/middlewares"
import * as yup from "yup"
import PostController from "../../controllers/PostController";

const router = Router()

router
    .get(
        "/",
        userProtected,
        validate({
            query: {
                limit: yup.number().required().min(1).max(100),
                page: yup.number().required().min(1),
                author_id: yup.number().required(),
            }
        }),
        PostController.listPostsByAuthor,
    )

    .post(
        "/",
        userProtected,
        validate({
            body: {
                title: yup.string().required().min(1),
                content: yup.string().required().min(1)
            }
        }),
        PostController.createOne,
    )

    .get(
        "/:id",
        userProtected,
        validate({
            params: {
                id: yup.number().required(),
            }
        }),
        PostController.getOne,
    )

export default router