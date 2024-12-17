import { type SchemaTypeDefinition } from 'sanity'
import { persnalInfo } from './persnal'
import { options } from './opt'

export const schema: { types: SchemaTypeDefinition[] } = {

  types: [persnalInfo, options],

}
