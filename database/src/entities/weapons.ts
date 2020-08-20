import { Entity, PrimaryKey, Property } from 'mikro-orm'

@Entity({ tableName: 'weapons' })
export class Weapon {
  @PrimaryKey()
  id!: number

  @Property()
  name!: string
}
