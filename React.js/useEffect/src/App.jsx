import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
const App = () => {
  // const [Number1, setNumber1] = useState('')
  // const [Number2, setNumber2] = useState('')
  const [elem, setelem] = useState([])
  // let k1=()=>{
  //   setNumber1(Math.floor(Math.random()*100))
  // }
  // let k2=()=>{
  //   setNumber2(Math.floor(Math.random()*100))
  // }
  async function info() {
    let response= await axios.get('http://pokeapi.co/api/v2/pokemon')
    console.log(response.data.results)
    setelem(response.data.results)
  }
  useEffect(()=>{
    console.log('hello')
  },[])
  return (
    <div className='flex flex-col'>
      
      <button onClick={info}  className='bg-blue-600 h-30 w-60 p-5 rounded-3xl text-4xl'> BC kalua</button>
      {elem.map((e,idx)=>{
        return <div key={idx} className='h-fit w-fit p-11 gap-1 bg-green-400 m-5 rounded-3xl'>
          <div className='text-6xl'>{e.name}</div>
          <div className='text-2xl'>{e.url}</div>
          </div> 
      })}
    </div>
  )
}

export default App