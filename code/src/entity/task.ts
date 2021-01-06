import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
class Task extends BaseEntity {
  @PrimaryGeneratedColumn()
  id?: number

  @Column({ length: 50 })
  title?: string
}
export default Task
