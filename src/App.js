import React from 'react'
import Stories from './Stories'
import Pagination from './Pagination';
import  Search from './Search' 
import Navbar from './Navbar'






const App = () => {
    
  return (
    <>
    <Navbar/>
     <Search/>
     <Pagination/>
    <Stories/>
    
    
    </>
    
  )
}

export default App