import express from 'express'

export default (supabase) => {
  const router = express.Router()

  // POST /api/supplier
  router.post('/', async (req, res) => {
    const { name, email, company, website, products, message } = req.body

    // basic validation
    if (!name || !email || !company || !products) {
      return res
        .status(400)
        .json({ error: 'name, email, company & products required' })
    }

    try {
      const { data, error } = await supabase
        .from('supplier')
        .insert([{ name, email, company, website, products, message }])

      if (error) throw error

      res.status(201).json({
        message: 'Application submitted',
        supplier: data[0]
      })
    } catch (err) {
      console.error('❌ POST /api/supplier failed:', err)
      res.status(500).json({ error: 'Server error' })
    }
  })

  return router
}
