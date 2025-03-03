import React from 'react'

export default function Input({placeholder ,type}) {
  return (
   <>
   <input type={type} placeholder={placeholder} className='border-b-2 border-gray-300  p-2' />
   </>
  );
}
