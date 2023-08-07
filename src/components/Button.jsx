import React from 'react'

const Button = ({style}) => {
   return (
    <a href='#' target="_blank">
    <button type='button' className={` py-4 px-12 bg-blue-gradient ${style} rounded-lg font-medium hover:text-slate-600 `}>
      Get Started
    </button>

    </a>
  )
   }


export default Button
