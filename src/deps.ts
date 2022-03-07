// Copyright 2021-2022 Shopopop. All rights reserved. ISC license.

/**
 * deps.ts
 *
 * This module re-exports the required methods from the dependant remote Ramda module.
 */
import Debug from 'debug'
import knex from 'knex'
import schemaInspector from 'knex-schema-inspector'

Debug.enable('*')

export {
  Debug,
  knex,
  schemaInspector
}
