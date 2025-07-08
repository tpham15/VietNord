/* eslint-env node */
/* eslint-disable no-undef */

import dotenv from 'dotenv'
dotenv.config()

export const MONGODB_URI = process.env.MONGODB_URI
export const PORT        = Number(process.env.PORT) || 3000

/* eslint-enable no-undef */
