import {Request, Response} from "express"
import {AnyObject} from "yup/lib/object"
import {User} from "./db/entities";

export interface ValidateProps extends AnyObject {
    body?: {
        [key: string]: AnyObject
    };
    params?: {
        [key: string]: AnyObject
    };
    query?: {
        [key: string]: AnyObject
    };
}

export interface CustomResponse extends Response {
    locals: Pick<User, "id">
}

export interface CustomRequest extends Request {
    query: any,
    params: any
}