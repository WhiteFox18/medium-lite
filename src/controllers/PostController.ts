import {NextFunction} from "express"
import {CustomRequest, CustomResponse} from "../types"
import {PostService} from "../services";

const PostController = {
    listPostsByAuthor: async (req: CustomRequest, res: CustomResponse, next: NextFunction) => {
        try {
            res.json(
                await PostService.listPostsByAuthor({
                    author_id: +req.query.author_id,
                    limit: +req.query.limit,
                    offset: +req.query.offset
                })
            )
        } catch (e) {
            next(e)
        }
    },
    getOne: async (req: CustomRequest, res: CustomResponse, next: NextFunction) => {
        try {
            res.json(
                await PostService.getOne(+req.params.id)
            )
        } catch (e) {
            next(e)
        }
    },
    createOne: async (req: CustomRequest, res: CustomResponse, next: NextFunction) => {
        try {
            res.json(
                await PostService.createOne({
                    title: req.body.title,
                    content: req.body.content,
                    author_id: res.locals.id
                })
            )
        } catch (e) {
            next(e)
        }
    },
}

export default PostController

