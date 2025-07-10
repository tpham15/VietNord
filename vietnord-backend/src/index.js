// src/index.js
import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import cors from 'cors'
import { createClient } from '@supabase/supabase-js'

import { SUPABASE_URL, SUPABASE_KEY, PORT } from './config.js'
import contactRoutes from './routes/contact.js'
import sampleRoutes from './routes/sample.js'

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)

const app = express()

// Middleware
app.use(cors({
  origin: ['https://www.vietnord.com', 'https://vietnord.com']
}));

app.use(express.json())

// Health check
app.get('/health', (_req, res) => {
  res.json({ up: true })
})

// Mount your Supabase‐backed routes
const api = import.meta.env.VITE_API_URL;
app.use(`${api}/api/contact`, contactRoutes(supabase))
app.use(`${api}/api/sample`,  sampleRoutes(supabase))

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Not Found' })
})

// Global error handler
app.use((err, _req, res) => {
  console.error('Unhandled error:', err)
  res.status(500).json({ error: 'Server error' })
})

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server listening on http://localhost:${PORT}`)
})
