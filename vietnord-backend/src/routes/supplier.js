// src/routes/supplier.js
import express from 'express'

export default function supplierRoutes(supabase) {
  const router = express.Router()

  router.post('/', async (req, res) => {
    const { name, email, company, website, products, message } = req.body

    if (!name || !email || !products) {
      return res
        .status(400)
        .json({ error: 'Name, email and products are required' })
    }

    try {
      // insert + immediately return the newly created row via .single()
      const { data: supplier, error, status } = await supabase
        .from('supplier_applications')            // ← your table name
        .insert({ name, email, company, website, products, message })
        .select()
        .single()

      if (error) {
        console.error('Supabase insert error:', error, 'status:', status)
        return res
          .status(500)
          .json({ error: error.message || 'Insert failed' })
      }

      if (!supplier) {
        console.error('Supabase returned no data for insert')
        return res.status(500).json({ error: 'No data returned from insert' })
      }

      return res
        .status(201)
        .json({ message: 'Application received', supplier })
    } catch (err) {
      console.error('Unexpected error in supplier route:', err)
      return res.status(500).json({ error: 'Server error' })
    }
  })

  return router
}
