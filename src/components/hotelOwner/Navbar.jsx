import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../../assets/assets'
import { UserButton } from '@clerk/clerk-react'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between px-16 py-5 shadow-md'>
        <Link to={'/'}>
        <img src={assets.logo} alt="logo" className='h-9 invert'/>
        </Link>
        <UserButton/>
    </div>
  )
}

export default Navbar