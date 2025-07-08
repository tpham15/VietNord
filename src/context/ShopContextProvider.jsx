// src/context/ShopContextProvider.jsx
import React, { useState, useEffect, useMemo } from 'react'
import PropTypes from 'prop-types'
import ShopContext from './ShopContext'
import { products as initialProducts } from '../data/products'

const ShopContextProvider = ({ children }) => {
  const [products, setProducts] = useState([])
  const [currency] = useState('€')
  const [sampleRequests, setSampleRequests] = useState([])

  useEffect(() => {
    setProducts(initialProducts)
  }, [])

  const requestSample = (productId, quantity = 1) => {
    setSampleRequests(prev => [
      ...prev,
      { productId, quantity, requestedAt: new Date().toISOString() }
    ])
  }

  // 🛠️ Memoize the context value to avoid re-creating the object each render
  const value = useMemo(() => ({
    products,
    currency,
    sampleRequests,
    requestSample
  }), [products, currency, sampleRequests])

  return (
    <ShopContext.Provider value={value}>
      {children}
    </ShopContext.Provider>
  )
}

// ✅ Validate that children is provided
ShopContextProvider.propTypes = {
  children: PropTypes.node.isRequired
}

export default ShopContextProvider
