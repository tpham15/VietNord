// src/routes/contact.js
import { Router } from 'express';

export default function contactRoutes(supabase) {
  const router = Router();

  // POST /api/contact
  router.post('/', async (req, res) => {
    const { name, email, message } = req.body;

    // basic validation
    if (!name || !email || !message) {
      return res
        .status(400)
        .json({ error: 'Fields name, email and message are all required.' });
    }

    // insert and return the new row
    const { data: inserted, error } = await supabase
      .from('contacts')
      .insert([{ name, email, message }])
      .select();            // <-- ask Supabase to return the inserted record

    if (error) {
      console.error('Supabase insert error:', error);
      return res.status(500).json({ error: error.message });
    }

    // guard against null or empty returned data
    if (!inserted || inserted.length === 0) {
      console.error('No rows returned after insert.');
      return res
        .status(500)
        .json({ error: 'Insert succeeded but no record was returned.' });
    }

    // success
    const contact = inserted[0];
    res.status(201).json({
      message: 'Contact saved',
      contact,            // full row you just inserted
    });
  });

  return router;
}
