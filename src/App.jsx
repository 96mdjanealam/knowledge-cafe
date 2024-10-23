import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/bookmarks/Bookmarks'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      <div className='w-11/12 mx-auto sm:flex'>
      <Blogs></Blogs>
      <Bookmarks></Bookmarks>
      </div>
     
      
      
    </>
  )
}

export default App
