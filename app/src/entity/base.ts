import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm'
import { validate } from 'class-validator'

@Entity({ synchronize: false })
class Base extends BaseEntity {
  @PrimaryGeneratedColumn()
  readonly id!: Number

  @CreateDateColumn({
    name: 'created_at',
    type: 'timestamp',
  })
  readonly createdAt!: Date

  @UpdateDateColumn({
    name: 'updated_at',
    type: 'timestamp',
  })
  readonly updatedAt!: Date

  // methods
  public validate = async () => {
    const errors = await validate(this) // target is called instance
    const result = errors.length > 0 ? errors : null
    return result
  }
}
export default Base
