import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from 'typeorm'
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

}