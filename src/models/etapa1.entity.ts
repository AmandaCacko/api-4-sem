import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import Codigo from './codigo.entity';

@Entity()
export default class Etapa1 extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ nullable: true })
  centro?: number;

  @Column({ nullable: true })
  concessionaria?: number;

  @Column({ nullable: true })
  cliente?: number;

  @ManyToOne(() => Codigo, codigo => codigo.etapas)
  codigo!: Codigo;
}
