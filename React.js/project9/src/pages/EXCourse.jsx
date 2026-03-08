import React from 'react'
import { useParams } from 'react-router-dom';
const EXCourse = () => {
  const param= useParams();
  console.log(param.id)

  return (
    <div><h1 className='font-bold text-9xl'>{param.id} coursePage</h1></div>
  )
}

export default EXCourse