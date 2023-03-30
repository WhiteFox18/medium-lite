import {AuthReturnType, SignIn} from "./types"
import {UserRepositoryType} from "../../db";
import Errors from "../../modules/errors";
import bcrypt from "bcryptjs"
import config from "../../config";
import jwt from "jsonwebtoken"
import {User} from "../../db/entities";

export default class AuthenticationService {
    private readonly userRepository: UserRepositoryType = null

    constructor(userRepository: UserRepositoryType) {
        this.userRepository = userRepository
    }

    signIn = async (data: SignIn): Promise<AuthReturnType> => {
        const user: Omit<User, "posts"> = await this.userRepository.findOne({
            select: ["id", "email", "password"],
            where: {
                email: data.email
            }
        })

        if (
            !user ||
            !(await bcrypt.compare(data.password, user.password))
        )
            Errors.login()

        const token = jwt.sign(
            {
                id: user.id,
            },
            config.jwt_secret,
            {
                expiresIn: "7d"
            },
        )

        return {
            token,
            user: {
                id: user.id,
                email: user.email
            }
        }
    }

    signUp = async (data: SignIn): Promise<AuthReturnType> => {
        const user: Omit<User, "posts"> = await this.userRepository.findOne({
            select: ["id", "email", "password"],
            where: {
                email: data.email
            }
        })

        if (user)
            Errors.alreadyExists(["email"])

        const insertedUser = await this.userRepository.save({
            email: data.email,
            password: await bcrypt.hash(data.password, config.salt_round)
        })

        const token = jwt.sign(
            {
                id: insertedUser.id,
            },
            config.jwt_secret,
            {
                expiresIn: "7d"
            },
        )

        return {
            token,
            user: {
                id: insertedUser.id,
                email: insertedUser.email
            }
        }
    }
}