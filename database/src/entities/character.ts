import { Entity, PrimaryKey, Property, OneToOne } from 'mikro-orm'

import { User } from '$entities/user'
import { Equipment } from '$entities/equipment'
import { Weapon } from '$entities/weapons'

import {
  Headgear,
  Torsogear,
  Handwear,
  Footwear,
  Legwear,
  Ring,
  Amulet
} from '$types/equipments'

@Entity({ tableName: 'characters' })
export class Character {
  @PrimaryKey()
  id!: number

  @Property()
  name!: string

  @OneToOne()
  user?: User

  @OneToOne({ entity: () => Equipment })
  head?: Headgear

  @OneToOne({ entity: () => Equipment })
  torso?: Torsogear

  @OneToOne({ entity: () => Equipment })
  hands?: Handwear

  @OneToOne({ entity: () => Equipment })
  feet?: Footwear

  @OneToOne({ entity: () => Equipment })
  legs?: Legwear

  @OneToOne({ entity: () => Equipment })
  ring1?: Ring

  @OneToOne({ entity: () => Equipment })
  ring2?: Ring

  @OneToOne({ entity: () => Equipment })
  ring3?: Ring

  @OneToOne({ entity: () => Equipment })
  ring4?: Ring

  @OneToOne({ entity: () => Equipment })
  amulet?: Amulet

  @OneToOne()
  weapon1?: Weapon

  @OneToOne()
  weapon2?: Weapon
}
