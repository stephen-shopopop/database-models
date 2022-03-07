// Copyright 2021-2022 Shopopop. All rights reserved. ISC license.

import { env } from 'process'
import { knex, schemaInspector } from './deps'

const environment = {
  MYSQL_ADDON_DB: env.MYSQL_ADDON_DB ?? 'b9fgpx56azq4rvw1ayjr',
  MYSQL_ADDON_USER: env.MYSQL_ADDON_USER ?? 'us3e8dmdmqxjghel',
  MYSQL_ADDON_PASSWORD: env.MYSQL_ADDON_PASSWORD ?? 'YF4PL3M5DLD78sNcTwcE',
  MYSQL_ADDON_HOST: env.MYSQL_ADDON_HOST ?? 'localhost',
  MYSQL_ADDON_PORT: env.MYSQL_ADDON_PORT ?? '3306',
  OUTPUT_DIR: './daoModels'
}

const database = knex({
  client: 'mysql',
  connection: {
    host: environment.MYSQL_ADDON_HOST,
    port: parseInt(environment.MYSQL_ADDON_PORT, 10),
    user: environment.MYSQL_ADDON_USER,
    password: environment.MYSQL_ADDON_PASSWORD,
    database: environment.MYSQL_ADDON_DB,
    charset: 'utf8',
    pool: {
      min: 2,
      max: 10
    }
  }
})

const inspector = schemaInspector(database)

export default inspector
