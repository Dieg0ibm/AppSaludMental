import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaHome, FaShoppingCart, FaBars } from 'react-icons/fa'

export const NavBar = () => {
  const navLinkClass = ({ isActive }) => {
    const classes = ['nav-bar__link']
    if (isActive) classes.push('nav-bar__link--active')
    return classes.join(' ')
  }
  return (
    <nav className='nav-bar'>
      {/* <h1 className='nav-bar__title'>aplicación salud mental</h1> */}

      <NavLink className={navLinkClass} to='/' aria-label='Inicio'>
        <FaHome size={24} />
      </NavLink>

      <div className="nav-bar__right-links">
        <NavLink
          className={navLinkClass}
          to='/lightbulb'
        >
          Ampolleta
        </NavLink>

        <NavLink className={navLinkClass} to='/tienda' aria-label='Tienda'>
          <FaShoppingCart size={24} /> 
        </NavLink>

        <NavLink className={navLinkClass} to='/configuraciones' aria-label='Configuraciones'>
          <FaBars size={24} /> {/* Use another icon or same icon for configurations */}
        </NavLink>
      </div>
    </nav>
  )
}
 
export default NavBar
