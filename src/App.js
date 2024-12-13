
import React from 'react'
import Tabs from "./components/Tabs";
import Todos from './page/Todos';


const todoWrapperStyle = `
 .todoWrapper{
  max-width: 1200px;
  margin: auto;
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
