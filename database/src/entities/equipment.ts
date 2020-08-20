import { Entity, PrimaryKey, Property } from 'mikro-orm'
import { EquipmentSlot } from '$types/equipments'

@Entity({ tableName: 'equipments' })
export class Equipment {
  @PrimaryKey()
  id!: number

  @Property()
  name!: string

  @Property()
  slot!: EquipmentSlot
}
