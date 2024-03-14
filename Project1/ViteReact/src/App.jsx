import { useState } from 'react'
import './App.css'


function App(){
  let [Counter,setCounter] = useState(0)

  function addValue(){
    if (Counter<10) setCounter(Counter+1)
  }

  function removeValue(){
    if (Counter>0) setCounter(Counter-1)
  }

 
  return(
    
    <>
    <div className='mb-7'>
      <div className='h-12 mb-2 border bg-gray-200 rounded text-black
      flex items-center justify-center text-2xl font-semibold
      '>{Counter}</div>
      <button onClick={addValue} className='bg-blue-700 mr-3 hover:bg-blue-600 rounded'>Add</button>
      <button onClick={removeValue} className='bg-blue-700 hover:bg-blue-600 rounded'>remove</button>
    
    </div>
    </>
  )
}


export default App



