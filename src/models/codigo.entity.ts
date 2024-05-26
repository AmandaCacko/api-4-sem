import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, /*ManyToOne*/ } from 'typeorm'
//import User from './user.entity'

@Entity()
export default class Codigo extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number

  @Column()
  tipo!: string

  @Column()
  nome!: string

  @Column()
  dataInicio!: Date

  @Column()
  dataFim!: Date

  /*@Column({name: 'user_id'})
  userId!: number

  @ManyToOne(() => User, user => user.tasks)
  user!: User*/

}