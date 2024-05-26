import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, /*ManyToOne*/ } from 'typeorm'
//import User from './user.entity'


@Entity()
export default class Etapa1 extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number

  @Column()
  centro?: number

  @Column()
  concessionaria?: number

  @Column()
  cliente?: number

  //@Column({name: 'user_id'})
  //userId!: number

 // @ManyToOne(() => User, user => user.tasks)
 // user!: User

 
}