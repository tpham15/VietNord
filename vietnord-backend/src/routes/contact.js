// vietnord-backend/src/routes/contact.js
import express from 'express'
import Contact from '../models/Contact.js'

const router = express.Router()

// POST /api/contact
router.post('/', async (req, res) => {
  const { name, email, message } = req.body

  // Basic validation
  if (!name || !email || !message) {
    return res
      .status(400)
      .json({ error: 'Name, email and message are all required.' })
  }

  try {
    // Create & save in one step; returns the created document
    const doc = await Contact.create({ name, email, message })

    return res
      .status(201)
      .json({ message: 'Contact saved successfully.', id: doc._id })
  } catch (err) {
    console.error('❌ POST /api/contact failed:', err)
    return res
      .status(500)
      .json({ error: 'Server error, please try again later.' })
  }
})

export default router
