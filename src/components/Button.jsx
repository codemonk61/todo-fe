import React from 'react'

const button__style = `
 .button{
   background: black;
   color: white;
   outline: none;
   border: none;
   border-radius: 4px;
   display: block;
   padding: 10px
 }


`

const Button = ({onClick=()=>{}, title="", disabled}) => {

  return (
    <>
    <style>
        {button__style}
    </style>
    <button
     onClick={onClick}
     disabled={disabled}
     className='button'
    >
        {title}
    </button>
    </>
  )
}

export default Button