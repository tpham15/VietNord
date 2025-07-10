// vietnord-backend/src/routes/contact.js
import express from 'express'

/**
 * contactRoutes(supabase) → Express.Router
 * @param {import('@supabase/supabase-js').SupabaseClient} supabase
 */
export default function contactRoutes(supabase) {
  const router = express.Router()

  // POST /api/contact
  router.post('/', async (req, res) => {
    const { name, email, message } = req.body

    // basic validation
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'name, email and message are all required' })
    }

    try {
      const { data, error } = await supabase
        .from('contacts')        // ← make sure you have a table called "contacts"
        .insert({ name, email, message })
        .select()                // return the inserted row(s)

      if (error) {
        console.error('Supabase insert error:', error)
        return res.status(500).json({ error: error.message })
      }

      // data is an array; return the first inserted record
      return res.status(201).json({
        message: 'Contact saved',
        contact: data[0]
      })
    } catch (err) {
      console.error('Unexpected error in /api/contact:', err)
      return res.status(500).json({ error: 'Server error' })
    }
  })

  return router
}
