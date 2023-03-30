import {NextFunction} from "express"
import {CustomRequest, CustomResponse} from "../types"
import {UserService} from "../services";

const UserController = {
    listUsers: async (req: CustomRequest, res: CustomResponse, next: NextFunction) => {
        try {
            res.json(
                await UserService.listUsers({
                    limit: +req.query.limit,
                    offset: +req.query.offset,
                })
            )
        } catch (e) {
            next(e)
        }
    },
}

export default UserController

