// src/routes/sample.js
import express from 'express'

/**
 * Mount with:
 *    import sampleRoutes from './routes/sample.js'
 *    app.use('/api/sample', sampleRoutes(supabase))
 */
export default function sampleRoutes(supabase) {
  const router = express.Router()

  router.post('/', async (req, res) => {
    console.log('🔔 [POST /api/sample] req.body:', req.body)

    // accept both camelCase and snake_case
    const {
      productId,
      product_id: product_id_snake,
      name,
      email,
      quantity,
      notes,
    } = req.body

    const pid = productId ?? product_id_snake
    if (!pid || !name || !email) {
      console.warn('⚠️ Validation failed:', { pid, name, email })
      return res
        .status(400)
        .json({ error: 'productId, name & email required' })
    }

    const record = {
      product_id: pid,
      name,
      email,
      quantity: quantity ?? null,
      notes: notes ?? '',
      created_at: new Date().toISOString(),
    }
    console.log('📦 Inserting record:', record)

    try {
      const { data, error: sbError } = await supabase
        .from('sample_requests')     // ← your table name
        .insert([record])
        .select()                    // return inserted row

      if (sbError) {
        console.error('❌ Supabase insert error:', sbError)
        return res
          .status(500)
          .json({ error: sbError.message, details: sbError })
      }

      console.log('✅ Inserted sample request:', data)
      return res.status(201).json({
        message: 'Sample request saved',
        request: data[0],
      })
    } catch (err) {
      console.error('🔥 Unexpected error in POST /api/sample:', err)
      return res.status(500).json({ error: err.message })
    }
  })

  return router
}
