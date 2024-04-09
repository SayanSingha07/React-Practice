import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

let value=10;





function App() {
  const [count, setCount] = useState(10)

  function addvalue()
  {
  
   if(count<20){
    setCount(count+1)
   }
    
   console.log( "clicked")
  
  }





  return (
    <>
      <h1 className='bg-green-400 text-blue-950 '>hello vite</h1>
      
    </>
  )
}

export default App
