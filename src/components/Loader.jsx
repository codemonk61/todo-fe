import React from 'react';


const loaderStyle = `
  .spinner-container {
    position: fixed;
    top:0;
    left: 0;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    background-color:  background: #f4f8fe;;
  }
  
  .spinner {
    width: 30px;
    height: 30px;
    border: 5px solid lightgray; 
    border-top: 5px solid #609cff; 
    border-radius: 50%; 
    animation: spin 1s linear infinite; 
  }
  
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  
`

const Loader = () => {
  return (
    <>
    <style>
      {loaderStyle}
    </style>
    <div className="spinner-container">
      <div className="spinner"></div>
    </div>
    </>
  );
};

export default Loader;
