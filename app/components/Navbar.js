'use client'
import React from 'react'
import Link from 'next/link'

function Navbar() {
  return (
    
    <nav className='bg-white'>
        <ul className='flex gap-3 justify-between items-center'>
            <img src='icon.png' height={60} width={60} className='mx-5'/>
            <div className='font-bold text-2xl'>
            </div>
            <div className='flex gap-3 justify-center items-center'>
            <Link className='hover:bg-gray-200 hover: cursor-pointer font-bold px-5 py-5' href='/'><li>Home</li></Link>
            <Link className='hover:bg-gray-200 hover: cursor-pointer font-bold px-5 py-5' href='/Help'><li>Help</li></Link>
            <Link className='hover:bg-gray-200 hover: cursor-pointer font-bold px-5 py-5' href='/Search'><li>Search</li></Link>
            <Link className='hover:bg-gray-200 hover: cursor-pointer font-bold px-5 py-5' href='/Card'><li>Card</li></Link>
            </div>
        </ul>
    </nav>
  )
}

export default Navbar