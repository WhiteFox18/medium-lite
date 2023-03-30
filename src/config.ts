import dotenv from "dotenv"
import path from "path"

const node_env = process.env.NODE_ENV ? process.env.NODE_ENV.trim() : "development"

dotenv.config({
    path: path.join(path.resolve(), `.env.${node_env}`),
})

const config = {
    node_env: node_env,
    allowed_origins: process.env.ALLOWED_ORIGINS?.split(", ") || [],
    database: {
        name: process.env.DATABASE_NAME || "test",
    },
    jwt_secret: process.env.JWT_SECRET || "some-secret-key",
    salt_round: Number(process.env.SALT_ROUNDS) || 10,
    port: Number(process.env.PORT) || 3000,
}

export default config