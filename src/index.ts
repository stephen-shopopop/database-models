// Copyright 2021-2022 Shopopop. All rights reserved. ISC license.

import { Debug } from './deps'
import inspector from './inspector'
import { Column } from 'knex-schema-inspector/dist/types/column'

// Debugger
const debug = Debug('models')

async function main (): Promise<void> {
  const schema: Record<string, unknown[]> = {}

  // Get columns info
  const columnsInfo: Column[] = await inspector.columnInfo()

  for (const column of columnsInfo) {
    const required = column.is_primary_key || column.is_nullable
    const data = { name: column.name, type: column.data_type, required: required }

    Array.isArray(schema[column.table]) ? schema[column.table].push(data) : schema[column.table] = [data]
  }

  debug(schema)
}

// Launch main
main().catch(err => debug(err))
