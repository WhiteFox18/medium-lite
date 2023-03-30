import {DataSource, Repository} from "typeorm";
import {Post, User} from "./entities";
import path from "path";
import config from "../config";

const AppDataSource = new DataSource({
    type: "better-sqlite3",
    database: path.join(path.resolve(), "..", config.database.name),
    synchronize: true,
    logging: true,
    entities: [Post, User],
    subscribers: [],
    migrations: [],
})

AppDataSource.initialize()

export type UserRepositoryType = Repository<User>
export const userRepository: UserRepositoryType = AppDataSource.getRepository(User);

export type PostRepositoryType = Repository<Post>
export const postRepository: PostRepositoryType = AppDataSource.getRepository(Post);

export default AppDataSource