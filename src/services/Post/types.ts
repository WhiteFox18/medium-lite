import {Post} from "../../db/entities";
import {Paginate} from "../types";

export interface CreateOne extends Omit<Post, "id" | "reading_time" | "author"> {
    author_id: number;
}

export interface ListPostsByAuthor extends Paginate {
    author_id: number;
}