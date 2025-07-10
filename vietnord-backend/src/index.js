/* src/index.js */
import 'dotenv/config';            // loads process.env from .env locally
import express      from 'express';
import cors         from 'cors';
import { createClient } from '@supabase/supabase-js';

import { SUPABASE_URL, SUPABASE_KEY, PORT, FRONTEND_URL } from './config.js';
import contactRoutes                        from './routes/contact.js';
import sampleRoutes                         from './routes/sample.js';

// initialize
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
const app      = express();

// CORS — only allow your frontend domain
app.use(cors({
  origin: FRONTEND_URL,
}));

app.use(express.json());

// health check
app.get('/health', (_req, res) => res.json({ up: true }));

// mount the routes (each returns a router factory that takes `supabase` as an arg)
app.use('/api/contact', contactRoutes(supabase));
app.use('/api/sample',  sampleRoutes(supabase));

// start
app.listen(PORT, () => {
  console.log(`🚀 Backend listening on http://localhost:${PORT}`);
});
