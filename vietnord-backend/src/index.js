import express          from 'express';
import cors             from 'cors';
import { createClient } from '@supabase/supabase-js';

import { SUPABASE_URL, SUPABASE_KEY, PORT } from './config.js';
import contactRoutes    from './routes/contact.js';
import sampleRoutes     from './routes/sample.js';
import supplierRoutes   from './routes/supplier.js';    // ← make sure this is here

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

const app = express();
app.use(cors());
app.use(express.json());

// health‐check
app.get('/health', (_req, res) => res.json({ up: true }));

// mount all three
app.use('/api/contact', contactRoutes(supabase));
app.use('/api/sample',  sampleRoutes(supabase));
app.use('/api/supplier', supplierRoutes(supabase));   // ← and this

app.listen(PORT, () => {
  console.log(`🚀 Server listening on http://localhost:${PORT}`);
});
