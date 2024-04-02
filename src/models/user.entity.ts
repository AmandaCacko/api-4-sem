import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm'
import Token from './token.entity'
import Task from './task.entity'

@Entity()
export default class User extends BaseEntity {
    @OneToMany(() => Token, token => token.user)
    tokens!: Token[]

    @OneToMany(() => Task, task => task.user)
    tasks!: Task[]

    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    name!: string

    @Column()
    email!: string

    @Column()
    password!: string
}