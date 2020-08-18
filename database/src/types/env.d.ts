import { MikroORM, Migrator } from 'mikro-orm'

export interface DatabaseEnv {
  DATABASE_URL: string
}
