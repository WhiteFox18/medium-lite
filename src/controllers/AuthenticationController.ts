import {NextFunction} from "express"
import {CustomRequest, CustomResponse} from "../types"
import {AuthenticationService} from "../services";

const AuthenticationController = {
    signIn: async (req: CustomRequest, res: CustomResponse, next: NextFunction) => {
        try {
            res.json(
                await AuthenticationService.signIn({
                    email: req.body.email,
                    password: req.body.password,
                })
            )
        } catch (e) {
            next(e)
        }
    },
    signUp: async (req: CustomRequest, res: CustomResponse, next: NextFunction) => {
        try {
            res.json(
                await AuthenticationService.signUp({
                    email: req.body.email,
                    password: req.body.password,
                })
            )
        } catch (e) {
            next(e)
        }
    },
}

export default AuthenticationController
