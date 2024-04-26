import React from 'react'
import { useState } from 'react'

function App() {
  const [color, setcolor] = useState("olive")


  return (
    <div className='w-full h-screen duration-200'
    style={{backgroundColor: color}}
    >
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl'>
          <button 
          onClick={() => setcolor("red")}
          className='outline-none px-4 py-1 rounded-xl text-white shadow-lg'
          style={{backgroundColor: "red"}}>Red</button>

          <button 
          onClick={() => setcolor("Blue")}
          className='outline-none px-4 py-1 rounded-xl text-white shadow-lg'
          style={{backgroundColor: "Blue"}}>Blue</button>

          <button 
          onClick={()=> setcolor("Pink")}
          className='outline-none px-4 py-1 rounded-xl text-white shadow-lg'
          style={{backgroundColor: "pink"}}>Pink</button>

          <button 
          onClick={()=> setcolor("green")}
          className='outline-none px-4 py-1 rounded-xl text-white shadow-lg'
          style={{backgroundColor: "green"}}>Green</button>

          <button 
          onClick={()=> setcolor("Orange")}
          className='outline-none px-4 py-1 rounded-xl text-white shadow-lg'
          style={{backgroundColor: "orange"}}>Orange</button>

          <button 
          onClick={()=> setcolor("Aqua")}
          className='outline-none px-4 py-1 rounded-xl text-white shadow-lg'
          style={{backgroundColor: "aqua"}}>Aqua</button>


        </div>
      </div>
    </div>
  )
}

export default App