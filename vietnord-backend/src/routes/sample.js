import express from 'express';
import SampleRequest from '../models/SampleRequest.js';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const reqDoc = new SampleRequest(req.body);
    await reqDoc.save();
    res.status(201).json({ message: 'Sample request saved' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
