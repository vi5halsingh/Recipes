import React from 'react'
import { NavLink } from 'react-router-dom'
import Create from './../pages/Create';

const Navbar = () => {
  return (
    <div className='flex justify-center items-center gap-10 mb-10 text-sm font-bold'>
      <NavLink to='/' className={(e)=> e.isActive ? "text-red-400" : " "}>Home</NavLink>
      <NavLink to='/recipes' className={(e)=> e.isActive ? "text-red-400" : " "}>Recipes</NavLink>
      <NavLink to='/about' className={(e)=> e.isActive ? "text-red-400" : " "}>About</NavLink>
      <NavLink to='/create' className={ (e)=> e.isActive ? "text-red-400" : " " }>Create Recipes</NavLink>
    </div>
  )
}

export default Navbar
