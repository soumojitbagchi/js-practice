import React from 'react'
import {NavLink,Link} from 'react-router-dom'
const navBar = () => {
  return (
    <div className="flex p-5 mb-5 text-center bg-pink-900 justify-between">
        <h2 className="text-6xl text-center pb-2">NavBar</h2>
        <input type="text" placeholder='Enter input' className='border-2 bg-pink-100 w-75 h-15 rounded-3xl' />
        <div className="flex text-4xl justify-evenly text-center mt-2">
          <Link to="/home">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/product">Product</Link>
          <Link to="/course">Course</Link>
        </div>
      </div>
  )
}

export default navBar