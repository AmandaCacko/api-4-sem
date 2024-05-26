import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from 'typeorm'
//import User from './user.entity'

@Entity()
export default class Etapa2 extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number

  @Column()
  nomeFuncionario!: string

  @Column({default: false})
  foraCaminhao!: boolean

  @Column({default: false})
  dentroCaminhao!: boolean

 
}