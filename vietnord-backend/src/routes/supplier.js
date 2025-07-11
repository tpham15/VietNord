// src/routes/supplier.js
import express from 'express';

export default function supplierRoutes(supabase) {
  const router = express.Router();

  router.post('/', async (req, res) => {
    const { name, email, company, website, products, message } = req.body;
    if (!name || !email || !products) {
      return res.status(400).json({ error: 'Name, email and products are required' });
    }

    try {
      const { data, error } = await supabase
        .from('supplier')
        .insert([{ name, email, company, website, products, message }]);

      if (error) {
        console.error('Supabase insert error:', error);
        return res.status(500).json({ error: error.message });
      }
      return res.status(201).json({ message: 'Application received', supplier: data[0] });
    } catch (err) {
      console.error('Unexpected error:', err);
      return res.status(500).json({ error: 'Server error' });
    }
  });

  return router;
}
