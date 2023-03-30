import {User} from "../../db/entities";

export interface SignIn {
    email: string;
    password: string;
}

export interface SignUp {
    email: string;
    password: string;
}

export interface AuthReturnType {
    token: string;
    user: Pick<User, "id" | "email">
}