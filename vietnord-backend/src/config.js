/* eslint-env node */
import dotenv from 'dotenv'
import { createClient } from '@supabase/supabase-js'

// Load .env into process.env
dotenv.config()

// Pull in each variable you need
export const PORT           = process.env.PORT || 3000
export const SUPABASE_URL   = process.env.SUPABASE_URL
export const SUPABASE_KEY   = process.env.SUPABASE_KEY

if (!SUPABASE_URL || !SUPABASE_KEY) {
  throw new Error('Missing SUPABASE_URL or SUPABASE_KEY in environment')
}

// Initialize supabase client
export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)
