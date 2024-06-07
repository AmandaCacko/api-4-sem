import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import Etapa1 from './etapa1.entity';

@Entity()
export default class Codigo extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  tipo!: string;

  @Column()
  nome!: string;

  @Column()
  dataInicio!: Date;

  @Column()
  dataFim!: Date;

  @OneToMany(() => Etapa1, etapa1 => etapa1.codigo)
  etapas!: Etapa1[];
}
