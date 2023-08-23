import logo from './assets/blog.svg'
import Createblog from './createBlog'
import { useState } from 'react'

export function NavBar(){
    return(
        <nav className="flex items-center justify-between p-4 bg-white shadow" >
        <a href="#" className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="w-10 h-10" />
        </a>
       <div className=''>
        <input placeholder='search' className='bg-transparent text-left text-black border-hidden' ></input>
       </div>
        <div>
        <select className="border rounded p-2 m-3">
          <option>Resources</option>
          <option>Technical</option>
          <option>Data Structures</option>
          <option>Web Development</option>
          <option>Algorithms</option>
        </select>
        <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2">Login</button>
        <button className="bg-green-500 text-white px-4 py-2 rounded" >Create</button>
        </div>
      </nav>
)}