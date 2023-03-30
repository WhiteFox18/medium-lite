import {Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn} from "typeorm";
import {User} from "./User";

@Entity()
export class Post {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: false})
    title: string;

    @Column({nullable: false})
    content: string;

    @Column({nullable: false, default: 0})
    reading_time: number;

    @ManyToOne(() => User, user => user.posts)
    @JoinColumn({ name: "author_id" })
    author: User;
}