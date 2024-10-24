import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/bookmarks/Bookmarks'

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleAddToBookmark = blog => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  }

  const handleReadingTime = time => {
    setReadingTime(readingTime + time)
  }

  return (
    <>
      <Header></Header>
      <div className='w-11/12 mx-auto sm:flex'>
      <Blogs handleAddToBookmark = {handleAddToBookmark} handleReadingTime = {handleReadingTime} ></Blogs>
      <Bookmarks bookmarks={bookmarks} readingTime= {readingTime}></Bookmarks>
      </div>
     
      
      
    </>
  )
}

export default App
