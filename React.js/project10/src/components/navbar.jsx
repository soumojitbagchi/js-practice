import React from 'react'
import { Outlet } from 'react-router-dom'
import {NavLink} from 'react-router-dom'
const navbar = () => {
  return (
    <div className="flex p-5 mb-5 text-center bg-pink-900 justify-between">
        <h2 className="text-6xl text-center pb-2">NavBar</h2>
        <input type="text" placeholder='Enter input' className='border-2 bg-pink-100 w-75 h-15 rounded-3xl' />
        <div className="flex text-4xl justify-evenly gap-3 text-center mt-2">
          
          <NavLink className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""} style={({isActive})=>({color:isActive?'red':'blue'})} to="/home">Home</NavLink>
          <NavLink className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""} style={({isActive})=>({color:isActive?'red':'blue'})} to="/about">About</NavLink>
          <NavLink className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""} style={({isActive})=>({color:isActive?'red':'blue'})} to="/product">Product</NavLink>
          <NavLink className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""} style={({isActive})=>({color:isActive?'red':'blue'})} to="/courses">Courses</NavLink>
        </div>
      </div>
  )
}

export default navbar