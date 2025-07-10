// vietnord-backend/src/routes/contact.js
import express from 'express'
import Contact from '../models/Contact.js'

const router = express.Router()

// POST /api/contact
router.post('/', async (req, res) => {
  const { name, email, message } = req.body

  // 1) basic validation
  if (!name || !email || !message) {
    return res
      .status(400)
      .json({ error: 'Name, email and message are all required.' })
  }

  try {
    // 2) create & save
    const contact = new Contact({ name, email, message })
    await contact.save()

    // 3) respond
    return res.status(201).json({ message: 'Contact saved' })
  } catch (err) {
    // 4) log & respond
    console.error('❌ POST /api/contact failed:', err)
    return res.status(500).json({ error: 'Server error' })
  }
})

export default router
