import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Post} from "./Post";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique: true})
    email: string;

    @Column({nullable: false, select: false})
    password: string;

    @OneToMany(() => Post, post => post.author)
    posts: Post[];
}