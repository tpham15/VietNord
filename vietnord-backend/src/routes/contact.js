// src/routes/contact.js
import express from 'express'
import Contact from '../models/Contact.js'

const router = express.Router()

/**
 * POST /api/contact
 * Body: { name, email, message }
 */
router.post('/', async (req, res) => {
  const { name, email, message } = req.body

  // 1. Validate required fields
  if (!name || !email || !message) {
    return res.status(400).json({
      error: 'Missing required fields: name, email, and message are all required.'
    })
  }

  try {
    // 2. Save to MongoDB
    const contact = new Contact({ name, email, message })
    await contact.save()

    // 3. Success response
    return res.status(201).json({ message: 'Contact saved' })
  } catch (err) {
    // 4. Log full stack for debugging
    console.error('❌ POST /api/contact failed:', err)

    // 5. Return real error message (or a fallback)
    return res.status(500).json({
      error: err.message || 'Server error'
    })
  }
})

export default router
