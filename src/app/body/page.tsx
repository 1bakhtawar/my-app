import React from 'react'

const page = () => {
  return (
    <div>
         {/* first row */}
         <div>
        <div className='flex justify-center mt-5 space-x-4 px-5 h-3/6 items-below'>
       <div className='bg-red-600 h-44 w-1/3'></div>
        <div className='bg-yellow-400 h-44 w-1/3'></div>
        <div className='bg-pink-700 h-44 w-1/3'></div>
       </div>
       {/* second row */}
        <div className='flex justify-center h-60 mt-5 px-5 w-full gap-2 items-below'>
        <div className='bg-green-500 h-44 w-3/6'></div>
        <div className='bg-blue-900 h-44 w-3/6'></div>
        </div>
        </div>
      
    </div>
  )
}
export default page
