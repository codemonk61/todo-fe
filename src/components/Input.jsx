import React from 'react'


const inputStyle = `
    .title {
        display: block;
        margin-bottom: 8px;
    }
    .input {
        width: 100%;
        display: block;
        padding: 12px;
        font-size: 16px;
        border-radius: 6px;
        border: 1px solid #e5e5ea;
        margin-bottom: 12px;
        outline: none;
        box-sizing: border-box; /* Ensures padding/border don't extend beyond container width */
    }
    .input::placeholder{
        color: lightgray
    }
    .input:focus {
        border-color: #cde0ff;
    }
    .required{
      color: red
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
        rows = "5",
        cols = "33"
    }
) => {
    return (
        <div>
        <style>
            {inputStyle}
        </style>
      
            <label className='title'>
                {title}<span className='required'>*</span>
            </label>
            <RenderAs
                onChange={onChange}
                value={value}
                placeholder={placeholder}
                rows={rows}
                cols={cols}
                className="input"
                name={name}
            />
        </div>
    )
}

export default Input