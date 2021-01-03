import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export default class Task extends BaseEntity {
  @PrimaryGeneratedColumn()
  id?: number

  @Column({ length: 50 })
  title?: string
}
