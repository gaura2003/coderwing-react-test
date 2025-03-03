import React from 'react'

export default function Tag({name})  {
  return (
    <div className='flex gap-5 items-center mt-20'>
      <div className='bg-red-500 w-5 rounded-sm h-10 '>
      </div>
      <h1 className='font-bold text-xl text-red-500'>{name}</h1>
    </div>
  )
}
