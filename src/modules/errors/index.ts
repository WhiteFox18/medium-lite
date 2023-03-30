import CustomError from "./CustomError"

const Errors = {
    login: (): never => {
        throw new CustomError({
            statusCode: 401,
            message: "login",
            description: "username or password incorrect",
            fields: [],
        })
    },
    notExists: (fields: string[]): never => {
        throw new CustomError({
            statusCode: 404,
            message: "notExists",
            description: "item not exists",
            fields: fields,
        })
    },
    unexpectedServerError: (): never => {
        throw new CustomError({
            statusCode: 500,
            message: "unexpectedServerError",
            description: "unexpected server error occurred",
            fields: [],
        })
    },
    emailServiceNotWorking: (): never => {
        throw new CustomError({
            statusCode: 503,
            message: "emailServiceNotWorking",
            description: "email service is currently unavailable",
            fields: [],
        })
    },
    notAuthenticated: (): never => {
        throw new CustomError({
            statusCode: 401,
            message: "notAuthenticated",
            description: "you are not authenticated",
            fields: [],
        })
    },
    alreadyExists: (fields: string[]): never => {
        throw new CustomError({
            statusCode: 400,
            message: "alreadyExists",
            description: "item already exists",
            fields: fields,
        })
    },
    authorNotExists: (author_id: number): never => {
        throw new CustomError({
            statusCode: 400,
            message: "authorNotExists",
            description: "given author not exists",
            fields: [author_id],
        })
    },
}

export default Errors