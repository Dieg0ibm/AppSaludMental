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

      <NavLink className={navLinkClass} to='/' aria-label='Inicio'>
        <FaHome size={28} />
      </NavLink>

      <div className="nav-bar__right-links">

        <NavLink className={navLinkClass} to='/tienda' aria-label='Tienda'>
          <FaShoppingCart size={28} /> 
        </NavLink>

        <NavLink className={navLinkClass} to='/configuraciones' aria-label='Configuraciones'>
          <FaBars size={28} /> 
        </NavLink>
      </div>
    </nav>
  )
}
 
export default NavBar
