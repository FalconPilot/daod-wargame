import { MikroORM } from 'mikro-orm'

export default async (uri: string) => (
  MikroORM.init({
    entitiesDirs: ['entities'],
    dbName: 'daod',
    type: 'postgresql',
    migrations: {
      tableName: 'daod_migrations',
      path: './migrations',
      pattern: /^[\w-]+\.ts$/,
      transactional: true,
      emit: 'ts'
    }
  })
)
