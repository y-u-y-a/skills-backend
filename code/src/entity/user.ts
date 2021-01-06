import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id?: number

  @Column({ length: 50 })
  firstname?: string

  @Column({ length: 50 })
  lastname?: string

  @Column()
  email?: String

  @Column()
  password?: String

  @Column()
  gender?: number = 0

  @Column({ nullable: true })
  birthday?: String

  @Column({ nullable: true })
  nearStation?: String

  @Column({ nullable: true })
  profile?: String
}
export default User
