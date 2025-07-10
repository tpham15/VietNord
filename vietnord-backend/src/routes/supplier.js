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
      const { data, error, status: sbStatus } = await supabase
        .from('suppliers')
        .insert([{ name, email, company, website, products, message }])
        .select() // make sure data comes back

      if (error) {
        console.error('🥲 Supabase insert error:', { error, sbStatus })
        return res.status(500).json({ error: error.message || 'Insert failed' })
      }

      // success!
      return res
        .status(201)
        .json({ message: 'Application received', supplier: data[0] })
    } catch (err) {
      console.error('🔥 Unexpected error in /api/supplier:', err)
      return res.status(500).json({ error: 'Server error' })
    }
  })

  return router
}
