  import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <div>
      <nav className=" bg-white flex justify-center gap-8 text-lg p-4  shadow-lg"> 
        <Link href="/"className='text-black'>Home</Link>
        <Link href="/about" className='text-black'>About</Link>
        <Link href="/content"className='text-black' >Content</Link>
        <Link href="/comster care"className='text-black' >customer care</Link>
        <Link href="/booking rms"className='text-black' >rooms booking</Link>
        <Link href="/revervation"className='text-black' >resavation</Link>
        <div className='flex justify-end bg-black rounded-md '>
         <button>login in</button> 
        </div>
      </nav>
    </div>
  )
}
