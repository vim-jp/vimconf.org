import fs from 'node:fs';
import path from 'node:path';

const CNAME = fs.readFileSync(path.join(import.meta.dirname, '../../../', 'CNAME'), 'utf-8').trim();

export const DOMAIN = `https://${CNAME}`;
