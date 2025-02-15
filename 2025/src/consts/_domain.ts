import path from 'node:path'
import fs from 'node:fs'

const CNAME = fs.readFileSync( path.join( import.meta.dirname, '../../../','CNAME' ), 'utf-8' ).trim()

export const DOMAIN = `https://${CNAME}`;
