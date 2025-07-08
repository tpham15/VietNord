import express from 'express';
import Contact from '../models/Contact.js';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    // Attempt to save, Mongoose will run schema validations
    const contact = new Contact(req.body);
    await contact.save();
    res.status(201).json({ message: 'Contact saved' });
  } catch (err) {
    if (err.name === 'ValidationError') {
      // Build a field-to-message map
      const errors = Object.entries(err.errors).reduce((map, [field, { message }]) => {
        map[field] = message;
        return map;
      }, {});
      return res.status(400).json({ errors });
    }
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

export default router;
