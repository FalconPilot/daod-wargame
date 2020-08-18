import * as envalid from 'envalid'

import { DatabaseEnv } from '$types/env'

export const validateEnv = (env: NodeJS.ProcessEnv): DatabaseEnv => (
  envalid.cleanEnv(env, {
    DATABASE_URL: envalid.url()
  })
)
