import React from 'react'
import { useParams } from 'react-router-dom'
const CourseDetails = () => {
  const param=useParams();
  return (
    <div>{param.id} Course Details</div>
  )
}

export default CourseDetails