// src/routes/supplier.js
import express from 'express'

export default function supplierRoutes(supabase) {
  const router = express.Router()

  router.post('/', async (req, res) => {
    const { name, email, company, website, products, message } = req.body
    if (!name || !email || !company || !products) {
      return res
        .status(400)
        .json({ error: 'name, email, company & products required' })
    }

    const payload = { name, email, company, website, products, message }
    const { data, error } = await supabase
      .from('supplier_applications')
      .insert([payload])
      .select('*')
      .single()

    if (error) {
      console.error('supplier insert error', error)
      return res.status(500).json({ error: 'Server error' })
    }

    res.status(201).json({ message: 'Application received', application: data })
  })

  return router
}
