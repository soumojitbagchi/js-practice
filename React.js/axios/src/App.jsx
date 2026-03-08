import React from 'react'
import axios, { Axios } from 'axios'
import { useState } from 'react'
import User from './components/user'
const App = () => {
  const [Elem, setElem] = useState([])
  async  function getData(){
  const data=await axios.get('https://jsonplaceholder.typicode.com/users')
    setElem(data.data.results)
    console.log(data.data)
  }
  return (
    <div>
      <button onClick={getData} className="h-fit p-3 m-5 w-fit bg-blue-400">click for data</button>
    <div className='flex flex-wrap'>
    {Elem.map(function(elem,idx){
      return <div key={idx} className='flex flex-row'> <User del={elem.data.results}/> </div>
    })}
  </div>
    </div>
  
  )
}

export default App