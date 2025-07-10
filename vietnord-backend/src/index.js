// src/index.js
import express from 'express'
import cors from 'cors'
import { createClient } from '@supabase/supabase-js'
import { SUPABASE_URL, SUPABASE_KEY, PORT, CORS_ORIGIN } from './config.js'
import contactRoutes from './routes/contact.js'
import sampleRoutes  from './routes/sample.js'
import supplierRoutes from './routes/supplier.js'



const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)
const app       = express()

// 1) CORS: only allow your Netlify domain (or use '*' to allow all)
app.use(
  cors({
    origin: CORS_ORIGIN,          // e.g. "https://www.vietnord.com"
    methods: ['GET','POST','OPTIONS'],
    allowedHeaders: ['Content-Type','Authorization']
  })
)

// 2) JSON parser
app.use(express.json())

// 3) Routes
app.use('/api/contact', contactRoutes(supabase))
app.use('/api/sample' , sampleRoutes(supabase))
app.use('/api/apply-supplier', supplierRoutes(supabase))

// 4) Healthcheck
app.get('/health', (_req, res) => res.json({ up: true }))

// 5) Start
app.listen(PORT, () => {
  console.log(`🚀 Server listening on port ${PORT}`)
})
