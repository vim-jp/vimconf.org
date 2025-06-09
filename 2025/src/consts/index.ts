import { base } from "astro:config/client";
import * as ufo from "ufo";

import { DOMAIN } from "./_domain.js" with { type: "macro" };

// eslint-disable-next-line ts/no-unsafe-argument
export const BASE_URL = ufo.joinURL(DOMAIN, base);

export const MAIN_BACKGROUND_COLOR = `#069700`;
