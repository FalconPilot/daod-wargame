import { Entity, PrimaryKey, Property } from 'mikro-orm'

@Entity()
export class User {
  @PrimaryKey()
  id!: number

  @Property()
  name!: string

  @Property()
  accountId!: string
}
