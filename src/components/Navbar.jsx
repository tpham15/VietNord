// src/components/Navbar.jsx
import React, { useState, useRef, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { assets } from '../assets/assets'

const Navbar = () => {
  const { t, i18n } = useTranslation()
  const [searchVisible, setSearchVisible]   = useState(false)
  const [searchQuery, setSearchQuery]       = useState('')
  const [menuVisible, setMenuVisible]       = useState(false)
  const [profileVisible, setProfileVisible] = useState(false)
  const searchRef  = useRef(null)
  const profileRef = useRef(null)
  const navigate   = useNavigate()

  // Search handlers
  const handleSearchToggle = () => setSearchVisible(v => !v)
  const handleSearchChange = e => setSearchQuery(e.target.value)
  const handleSearchSubmit = e => {
    e.preventDefault()
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`)
      setSearchQuery('')
      setSearchVisible(false)
    }
  }

  // Language switch
  const handleLanguageChange = e => {
    i18n.changeLanguage(e.target.value)
  }

  // Close overlays on outside click / Escape
  useEffect(() => {
    const clickOutside = e => {
      if (searchVisible && searchRef.current && !searchRef.current.contains(e.target))
        setSearchVisible(false)
      if (profileVisible && profileRef.current && !profileRef.current.contains(e.target))
        setProfileVisible(false)
      // if click outside mobile menu button/links
      if (menuVisible && !e.target.closest('[aria-label="Open menu"]'))
        setMenuVisible(false)
    }
    const onEsc = e => {
      if (e.key === 'Escape') {
        setSearchVisible(false)
        setProfileVisible(false)
        setMenuVisible(false)
      }
    }
    document.addEventListener('mousedown', clickOutside)
    document.addEventListener('keydown', onEsc)
    return () => {
      document.removeEventListener('mousedown', clickOutside)
      document.removeEventListener('keydown', onEsc)
    }
  }, [searchVisible, profileVisible, menuVisible])

  // Helper to map nav keys to paths
  const getPath = key => {
    if (key === 'home') return '/'
    if (key === 'requestSample') return '/request-sample'
    return `/${key}`
  }

  const navKeys = ['home','about','products','requestSample','contact']

  return (
    <nav className="relative flex items-center justify-between py-5 px-8 font-medium shadow-md bg-white">
      {/* Logo */}
      <NavLink to="/">
        <img src={assets.logo} className="w-36 cursor-pointer" alt={t('navbar.logoAlt')} />
      </NavLink>

      {/* Desktop Links */}
      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        {navKeys.map(key => (
          <NavLink key={key} to={getPath(key)} className="flex flex-col items-center gap-1">
            <p>{t(`navbar.${key}`)}</p>
          </NavLink>
        ))}
      </ul>

      {/* Icons, Search, Language, Profile, Mobile Menu Toggle */}
      <div className="flex items-center gap-4">
        {/* Search */}
        <div ref={searchRef} className="relative">
          <button
            onClick={handleSearchToggle}
            aria-label={t('navbar.toggleSearch')}
            className="p-2 focus:outline-none"
          >
            <img src={assets.search_icon} className="w-5" alt={t('navbar.searchIconAlt')} />
          </button>
          {searchVisible && (
            <form
              onSubmit={handleSearchSubmit}
              className="absolute right-full mr-2 top-1/2 transform -translate-y-1/2 flex items-center border border-gray-300 rounded bg-white"
            >
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder={t('navbar.searchPlaceholder')}
                className="px-2 py-1 focus:outline-none"
              />
              <button
                type="submit"
                aria-label={t('navbar.submitSearch')}
                className="px-2 py-1 focus:outline-none"
              >
                {t('navbar.go')}
              </button>
            </form>
          )}
        </div>

        {/* Language Switcher */}
        <select
          value={i18n.language}
          onChange={handleLanguageChange}
          aria-label={t('navbar.selectLanguage')}
          className="p-2 border border-gray-300 rounded focus:outline-none"
        >
          <option value="en">EN</option>
          <option value="vi">VI</option>
        </select>

       

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMenuVisible(true)}
          aria-label={t('navbar.openMenu')}
          className="sm:hidden p-2 focus:outline-none"
        >
          <img src={assets.menu_icon} className="w-5" alt={t('navbar.menuIconAlt')} />
        </button>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 bottom-0 bg-white transition-all z-50 overflow-hidden ${
          menuVisible ? 'w-full' : 'w-0'
        }`}
      >
        <div className="flex flex-col text-gray-600">
          <button
            onClick={() => setMenuVisible(false)}
            aria-label={t('navbar.closeMenu')}
            className="flex items-center gap-4 p-3 focus:outline-none"
          >
            <img
              src={assets.dropdown_icon}
              className="h-4 rotate-180"
              alt={t('navbar.backIconAlt')}
            />
            <p>{t('navbar.back')}</p>
          </button>
          {navKeys.map(key => (
            <NavLink
              key={key}
              to={getPath(key)}
              onClick={() => setMenuVisible(false)}
              className="py-2 px-6 border"
            >
              {t(`navbar.${key}`)}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
