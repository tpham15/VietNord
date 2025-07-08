// src/components/ProductCard.jsx
import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const ProductCard = ({ product }) => (
  <div className="border rounded-lg overflow-hidden shadow-sm">
    <img
      src={product.img}
      alt={product.name}
      className="w-full h-48 object-cover"
    />
    <div className="p-4">
      <h3 className="montserrat-600 text-xl mb-1">{product.name}</h3>
      <p className="montserrat-400 text-sm text-gray-600 mb-2">
        {product.category} • {product.origin}
      </p>
      <p className="montserrat-400 text-sm text-gray-800 mb-4">
        €{product.price} / {product.moq}
      </p>
      <Link
        to={`/request-sample?product=${product.id}`}
        className="montserrat-600 block text-center px-4 py-2 bg-[#C62828] text-white rounded-md hover:bg-red-600 transition"
      >
        Request Sample
      </Link>
    </div>
  </div>
)

ProductCard.propTypes = {
  product: PropTypes.shape({
    id:       PropTypes.number.isRequired,
    name:     PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    origin:   PropTypes.string.isRequired,
    img:      PropTypes.string.isRequired,
    price:    PropTypes.number.isRequired,
    moq:      PropTypes.string.isRequired,
  }).isRequired,
}

export default ProductCard
