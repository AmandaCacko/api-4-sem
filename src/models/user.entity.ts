import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm'
import Token from './token.entity'
import Task from './task.entity'
import Address from './address.entity'
/*import Etapa1 from './etapa1.entity'
import Codigo from './codigo.entity'*/


@Entity()
export default class User extends BaseEntity {
    @OneToMany(() => Token, token => token.user)
    tokens!: Token[]

    @OneToMany(() => Task, task => task.user)
    tasks!: Task[]
    
    @OneToMany(() => Address, address => address.user)
    addresses!: Address[]

   /* @OneToMany(() => Etapa1, etapa1 => etapa1.user)
    etapas1!: Etapa1[]

    @OneToMany(() => Codigo, codigo => codigo.user) // Serve para fazer o get na tela de etapa 1
    codigo!: Codigo[]*/

    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    name!: string

    @Column()
    email!: string

    @Column()
    password!: string
}