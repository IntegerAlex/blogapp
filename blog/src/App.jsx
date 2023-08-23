import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import './App.css'
import {NavBar} from './navbar'
import BlogCom from './blog'
import Createblog from './createBlog'
import InputForm from './createBlog'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
          <NavBar/>
          <BlogCom/>
          <InputForm/>
      </div>
 

    </>
  )
}

export default App
