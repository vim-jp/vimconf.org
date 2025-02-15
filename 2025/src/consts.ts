import * as ufo from 'ufo'
import { base } from "astro:config/client"

export const DOMAIN = `https://vimconf.org`;

export const BASE_URL = ufo.joinURL(DOMAIN, base)
