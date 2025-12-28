import React, { useState, useEffect, useRef } from 'react'
import logo from '../assets/logo.png'

const Navbar = () => {
  const [theme, setTheme] = useState('light')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef(null)
  const hamburgerRef = useRef(null)

  useEffect(() => {
    // Check if there's a saved theme in localStorage
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      setTheme(savedTheme)
      document.body.className = savedTheme
    }
  }, [])

  useEffect(() => {
    // Close menu when clicking outside
    const handleClickOutside = (event) => {
      if (
        isMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        hamburgerRef.current &&
        !hamburgerRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isMenuOpen])

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme)
    document.body.className = newTheme
    localStorage.setItem('theme', newTheme)
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <div className={`navbar ${theme}`}>
      <div className='container'>
        <div className='logo'>
          <img src={logo} alt='logo' className='logo-img' />
        </div>
      </div>
      <div 
        ref={hamburgerRef}
        className={`hamburger ${isMenuOpen ? 'active' : ''}`} 
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div 
        ref={menuRef}
        className={`menu ${isMenuOpen ? 'active' : ''}`}
      >
        <ul>
          <li><a href='#' onClick={closeMenu}>Home</a></li>
          <li><a href='#' onClick={closeMenu}>About</a></li>
          <li><a href='#' onClick={closeMenu}>Services</a></li>
          <li><a href='#' onClick={closeMenu}>Contact</a></li>
          <li>
            <button 
              className={`dark ${theme === 'dark' ? 'active' : ''}`}
              onClick={() => handleThemeChange('dark')}
            >
              Dark
            </button>
          </li>
          <li>
            <button 
              className={`light ${theme === 'light' ? 'active' : ''}`}
              onClick={() => handleThemeChange('light')}
            >
              Light
            </button>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar