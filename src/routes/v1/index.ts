import {Router} from "express"
import auth from "./auth";
import user from "./user";
import post from "./post";

const router = Router()

router
    .use("/auth", auth)

    .use("/user", user)

    .use("/post", post)

export default router