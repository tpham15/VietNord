// src/components/Footer.jsx
import React from 'react'
import { FaLinkedin, FaFacebookF, FaInstagram } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="py-12 text-gray-700">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
        {/* Column 1: Quick Links */}
        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/about" className="hover:underline">About Us</a></li>
            <li><a href="/products" className="hover:underline">Products</a></li>
            <li><a href="/apply-supplier" className="hover:underline">For Suppliers</a></li>
            <li><a href="/request-sample" className="hover:underline">For Buyers</a></li>
          </ul>
        </div>

        {/* Column 2: Legal & Policy */}
        <div>
          <h4 className="font-semibold mb-4">Legal & Policy</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/terms" className="hover:underline">Terms of Use</a></li>
            <li><a href="/privacy" className="hover:underline">Privacy Policy</a></li>
            <li><a href="/supplier-agreement.pdf" className="hover:underline">Supplier Agreement</a></li>
            <li><a href="/cookie-policy" className="hover:underline">Cookie Policy</a></li>
          </ul>
        </div>

        {/* Spacer (only on lg+) */}
        <div className="hidden lg:block" />

        {/* Column 3: Contact & Newsletter */}
        <div>
          <h4 className="font-semibold mb-4">Contact & Newsletter</h4>
          <p className="text-sm mb-1">
            📧 <a href="mailto:contact@vietnord.com" className="hover:underline">contact@vietnord.com</a>
          </p>
          <p className="text-sm mb-1">📞 +358 413134414</p>
          <p className="text-sm mb-4">📍 Hameenkatu 11A, Tampere, Finland</p>
          <form className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-3 py-2 rounded-l bg-gray-100 text-gray-700 focus:outline-none"
            />
            <button
              type="submit"
              className="px-4 bg-[#C62828] text-white rounded-r hover:bg-red-600 transition"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Column 4: Social */}
        <div>
          <h4 className="font-semibold mb-4">Connect</h4>
          <div className="flex space-x-4 text-lg text-gray-700">
            <a
              href="https://www.linkedin.com/company/vietnord"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-gray-900"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.facebook.com/vietnord"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-gray-900"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/vietnord"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-gray-900"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} VietNord. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
