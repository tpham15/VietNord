import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
// src/App.jsx
import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'


import Navbar          from './components/Navbar'
import Footer          from './components/Footer'
import Home            from './pages/Home'
import About           from './pages/About'
import Products        from './pages/Products'
import ContactPage     from './pages/Contact'
import Login           from './pages/Login'
import RequestSample   from './pages/RequestSample'
import ApplySupplier   from './pages/ApplySupplier'

const App = () => (
  <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
    <Navbar />
    <Routes>
      <Route path="/"               element={<Home />} />
      <Route path="/about"          element={<About />} />
      <Route path="/products"       element={<Products />} />
      <Route path="/contact"        element={<ContactPage />} />
      <Route path="/login"          element={<Login />} />
      <Route path="/request-sample" element={<RequestSample />} />
      <Route path="/apply-supplier" element={<ApplySupplier />} />
      <Route path="*"               element={<Navigate to="/" replace />} />
    </Routes>
    <ContactPage/>
    <Footer />
    <ToastContainer position="top-right" autoClose={3000} />
  </div>
)

export default App
