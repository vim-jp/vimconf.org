import * as ufo from 'ufo'
import { base } from "astro:config/client"

import { DOMAIN } from "./_domain.js" with { type: "macro" }

export const BASE_URL = ufo.joinURL(DOMAIN, base)

export const MAIN_BACKGROUND_COLOR = `#069700`;
