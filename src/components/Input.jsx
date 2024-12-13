import React from 'react'

const inputStyle = `
    .title{
     display: block;
     margin-bottom: 8px;
    }
     .input{
       width: 100%;
       margin-bottom: 12px;
       display: block
     }
`
const Input = (
    { 
        RenderAs = "input",
        title = "Enter Name",
        name="",
        value = "",
        onChange = "",
        placeholder = "Enter value",
        style = {},
        rows = "5",
        cols = "33"
    }
) => {
    return (
        <>
        <style>
            {inputStyle}
        </style>
      
            <label className='title'>
                {title}:
            </label>
            <RenderAs
                onChange={onChange}
                value={value}
                placeholder={placeholder}
                style={style}
                rows={rows}
                cols={cols}
                className="input"
                name={name}
            />
        </>
    )
}

export default Input