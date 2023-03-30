import Authentication from "./Authentication";
import User from "./User";
import Post from "./Post";
import {postRepository, userRepository} from "../db";

export const AuthenticationService = new Authentication(userRepository)
export const UserService = new User(userRepository)
export const PostService = new Post(userRepository, postRepository)