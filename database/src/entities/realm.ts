import { Entity, PrimaryKey, Property, OneToOne } from 'mikro-orm'
import { User } from '$entities/user'

@Entity()
export class Realm {
  @PrimaryKey()
  id!: number

  @Property()
  name!: string

  @OneToOne()
  user?: User
}
