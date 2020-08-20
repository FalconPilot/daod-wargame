import globby from 'globby'
import path from 'path'
import { MikroORM } from 'mikro-orm'

export default async (uri: string): Promise<MikroORM> => (
  MikroORM.init({
    entities: (await (globby(path.resolve(__dirname, 'entities', '*.ts')))).map(require),
    type: 'postgresql',
    baseDir: __dirname,
    clientUrl: uri,
    migrations: {
      tableName: 'daod_migrations',
      path: './migrations',
      pattern: /^[\w-]+\.ts$/,
      transactional: true,
      emit: 'ts'
    }
  })
)
