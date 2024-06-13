import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export default class Home extends BaseEntity {
  @PrimaryGeneratedColumn()
  codigoProcesso!: number

  @Column()
  responsavel!: string

  @Column()
  etapa!: string

  @Column()
  progresso!: number

}