import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-around bg-neutral-800 text-white py-3'>
      <div className="logo">
        <span className='font-bold text-xl mx-9 ml-80'>Task Planner</span>
      </div>
        <ul className='flex gap-10 mr-80 '>
            <li className='cursor-pointer hover:font-bold transition-all'>Home</li>
            <li className='cursor-pointer hover:font-bold transition-all'>Your Tasks</li>
        </ul>
    </nav>
  )
}

export default Navbar