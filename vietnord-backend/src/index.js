/* eslint-env node */
import dotenv from 'dotenv'
dotenv.config({ path: './.env' })
import express  from 'express';
import cors     from 'cors';
import mongoose from 'mongoose';

import { MONGODB_URI, PORT } from './config.js';
import contactRoutes         from './routes/contact.js';
import sampleRoutes          from './routes/sample.js';

const app = express();
app.use(cors());
app.use(express.json());

// Quick debug—remove once it’s working:
console.log('> MONGODB_URI =', MONGODB_URI);
console.log('> PORT        =', PORT);
app.use('/api/sample', sampleRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/sample',  sampleRoutes);
app.get('/api/health', (_req, res) => res.json({ ok: true }));


mongoose.connect('mongodb://localhost:27017/vietnord')
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch(console.error)

  .then(() => console.log('✅ Connected to MongoDB'))
  .catch(err => console.error('❌ MongoDB connection error:', err));

app.listen(PORT, () => {
  console.log(`🚀 Server listening on http://localhost:${PORT}`);
});
