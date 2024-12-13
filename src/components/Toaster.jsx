import React from 'react'

const toasterWrapper = `
   .toaster__style
   {
    position: fixed;
    top: 20px;
    right: 20px;
    padding: 8px;
    height: 100px;
    width: 250px;
    background: white;
    border-radius: 4px;
    box-shadow: 0 4px 4px rgba(0, 0, 0, .12), 0 0 10px rgba(0, 0, 0, .06);
    z-index: 9;
}
    .toaster__header{
        display: flex;
        gap: 8px;
        align-items: center;
    }
    .title{
     font-size: 16px;
     font-weight: bold;
    }
    .remove{
     margin-left: auto;
     cursor: pointer
    }
     .btn{
      height: 14px;
      width:14px;
      text-align: center;
      line-height: 14px;
   
      border-radius: 50%;
      font-size: 10px;
      color: white
     }
      .error{
         background: #ff0b00;
      }
        .success {
        background: #009104;
        }
`
const Toaster = ({ title = "Info", message = "Lorem Ipsum Success!", type = "error", onClose = () => { } }) => {

    React.useEffect(() => {
        const id = setTimeout(() => {
            onClose()
        }, 1000);
        return () => clearTimeout(id)
    }, [onClose])
    return (
        <>
            <style>
                {toasterWrapper}
            </style>
            <div className='toaster__style'>

                <div className='toaster__header'>
                    {type === "success" ? <div className='success btn'>&#10004;</div> : <div className='error btn'>&#10005;</div>}
                    <p className='title'>{title}</p>
                    <div className='remove'>&#10006;</div>
                </div>
                <div className='toaster__message'>
                    {message}
                </div>
            </div>
        </>
    )
}

export default Toaster