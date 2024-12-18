import React from 'react'

const button__style = `
 .button{
   background: #609cff;
   color: white;
   outline: none;
   border: none;
   border-radius: 6px;
   display: block;
   padding: 10px;
   cursor: pointer;
   width: 10%
 }
   .disabled{
    background-color: lightgray;
   }
   @media (max-width: 768px){
    .button{
     width: 100%
    }
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
     disabled={!disabled}
     className={!disabled ? "disabled button" :'button'}
    >
        {title}
    </button>
    </>
  )
}

export default Button