import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm'
import User from './user.entity'

@Entity()
export default class Address extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number

  @Column()
  street!: string

  @Column()
  city!: string

  @Column()
  state!: string

  @Column()
  country!: string

  @Column({ name: 'user_id' })
  userId!: number

  @ManyToOne(() => User, user => user.addresses)
  user!: User
}
