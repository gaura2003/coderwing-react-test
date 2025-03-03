import React from 'react'


export default function Button({text,type ,image ,style}) {
  return (
    <button type={type} className={`${style} font-bold py-2 px-4 rounded flex justify-center items-center`}>
        {image}
        {text}
    </button>
  )
}
