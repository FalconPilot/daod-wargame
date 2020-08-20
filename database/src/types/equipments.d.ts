import { Equipment } from '$entities/equipment'

export type EquipmentSlot
  = 'torso'
  | 'head'
  | 'hands'
  | 'feet'
  | 'legs'
  | 'ring'
  | 'amulet'

export interface Headgear extends Equipment {
  slot: 'head'
}

export interface Torsogear extends Equipment {
  slot: 'torso'
}

export interface Handwear extends Equipment {
  slot: 'hands'
}

export interface Footwear extends Equipment {
  slot: 'feet'
}

export interface Legwear extends Equipment {
  slot: 'legs'
}

export interface Ring extends Equipment {
  slot: 'ring'
}

export interface Amulet extends Equipment {
  slot: 'amulet'
}
