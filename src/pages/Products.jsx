// src/components/Products.jsx
import React, { useContext } from 'react'
import ShopContext from '../context/ShopContext'
import ProductCard from '../components/ProductCard'

const Products = () => {
  const { products } = useContext(ShopContext)

  if (!products || products.length === 0) {
    return (
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-gray-600">No products available at the moment.</p>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="montserrat-700 text-3xl mb-8 text-center">
          Our Full Catalogue
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Products
