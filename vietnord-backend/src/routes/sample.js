import { Router } from 'express';

export default function sampleRoutes(supabase) {
  const router = Router();

  router.post('/', async (req, res) => {
    const { productId, name, email } = req.body;
    if (!productId || !name || !email) {
      return res.status(400).json({ error: 'productId, name & email required' });
    }

    const { data, error } = await supabase
      .from('sample_requests')
      .insert([{ product_id: productId, name, email }]);

    if (error) {
      console.error('Supabase insert error:', error);
      return res.status(500).json({ error: error.message });
    }

    res.status(201).json({ message: 'Sample request saved', id: data[0].id });
  });

  return router;
}
