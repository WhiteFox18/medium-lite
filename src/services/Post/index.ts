import {PostRepositoryType, UserRepositoryType} from "../../db";
import {CreateOne, ListPostsByAuthor} from "./types";
import Errors from "../../modules/errors";
import {checkQueryResultNoData} from "../../modules/helpers";


export default class PostService {
    private readonly userRepository: UserRepositoryType = null
    private readonly postRepository: PostRepositoryType = null
    private readonly AVERAGE_WORDS_PER_MINUTE = 265

    constructor(userRepository: UserRepositoryType, postRepository: PostRepositoryType) {
        this.userRepository = userRepository
        this.postRepository = postRepository
    }

    listPostsByAuthor = async (data: ListPostsByAuthor) => {
        const [posts, count] = await this.postRepository
            .createQueryBuilder("post")
            .leftJoinAndSelect("post.author", "author")
            .where("author.id = :id", {id: data.author_id})
            .skip(data.offset)
            .take(data.limit)
            .getManyAndCount();

        return {
            count,
            items: posts
        }
    }

    createOne = async (data: CreateOne) => {
        const user = await this.userRepository.findOneBy({id: data.author_id})

        if (!user)
            Errors.authorNotExists(data.author_id)

        const post = await this.postRepository.save({
            author: user,
            title: data.title,
            content: data.content,
            reading_time: Math.ceil(data.content.split(" ").length / this.AVERAGE_WORDS_PER_MINUTE)
        })

        return await this.getOne(post.id)
    }

    getOne = async (id: number) => {
        return checkQueryResultNoData(
            await this.postRepository.findOne({
                select: [
                    "id", "title", "content", "reading_time",
                ],
                relations: ["author"],
                where: {id}
            })
        )
    }
}