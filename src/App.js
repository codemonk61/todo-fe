
import React from 'react'
import Todos from './page/Todos';


const todoWrapperStyle = `
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Sour+Gummy:ital,wght@0,100..900;1,100..900&display=swap');
  body{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Montserrat", serif;
  background: #f4f8fe;
  }
  .todoWrapper {
   max-width: 1200px;
   margin: auto;
   padding: 16px;
  }
`

function App() {

  

  return (
    <div className='todoWrapper'>
      <style>
        {todoWrapperStyle}
      </style>
      <Todos/>
    </div>
  );
}

export default App;
