import {UserRepositoryType} from "../../db";
import {ListUsers} from "./types";

export default class UserService {
    private readonly userRepository: UserRepositoryType = null

    constructor(userRepository: UserRepositoryType) {
        this.userRepository = userRepository
    }

    listUsers = async (data: ListUsers) => {
        const [users, count] = await this.userRepository.findAndCount({
            skip: data.offset,
            take: data.limit
        })

        return {
            count,
            items: users
        }
    }
}