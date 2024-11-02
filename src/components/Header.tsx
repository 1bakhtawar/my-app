import React from 'react'

const Navbar = () => {
  return (
    <div>
        <header className='flex bg-blue-900 w-full'>
        <div className='w-2/3'>
            
                <h1 className='text-white px-8'> Header</h1>
            </div>
            <div>

            <ul className='flex gap-11 px-8 justify-end text-white'>
            
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        </div>
        </header>    
    </div>
  )
}
export default Navbar