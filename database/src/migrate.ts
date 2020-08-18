import { MikroORM, Migrator } from 'mikro-orm'

import { DatabaseEnv } from '$types/env'

import init from './init'
import { validateEnv } from './validateEnv'

const env: DatabaseEnv = validateEnv(process.env)

init(env.DATABASE_URL)
  .then(async (orm: MikroORM) => {
    try {
      const migrator: Migrator = orm.getMigrator()
      await migrator.up()
    } catch (err) {
      console.error(err)
    }
    await orm.close(true)
  })
