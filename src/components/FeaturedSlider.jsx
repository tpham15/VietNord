// src/components/FeaturedSlider.jsx
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import ShopContext from '../context/ShopContext'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const FeaturedSlider = () => {
  const { products } = useContext(ShopContext)

  if (!products.length) return null

  const settings = {
    dots: true, infinite: true, speed: 500,
    slidesToShow: 3, slidesToScroll: 1,
    autoplay: true, autoplaySpeed: 4000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640,  settings: { slidesToShow: 1 } },
    ],
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="open-sans-700 text-3xl mb-8 text-center">
          Featured Products
        </h2>
        <Slider {...settings}>
          {products.map(p => (
            <div key={p.id} className="px-2">
              <div className="border rounded-lg overflow-hidden shadow-sm">
                <img
                  src={p.img}
                  alt={p.name}
                  className="w-full h-56 object-cover"
                />
                <div className="p-4">
                  <h3 className="open-sans-600 text-xl mb-1">{p.name}</h3>
                  <p className="open-sans-400 text-sm text-gray-600 mb-2">
                    {p.category} • {p.origin}
                  </p>
                  <Link
                    to={`/request-sample?product=${p.id}`}
                    className="open-sans-600 px-4 py-2 bg-[#C62828] text-white rounded-md hover:bg-red-600 transition"
                  >
                    Request Sample
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  )
}

export default FeaturedSlider
