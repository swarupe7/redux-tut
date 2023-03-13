import React from 'react'
import { useGlobalContext } from './Context'


const Search = () => {
  const {query,searchPost}=useGlobalContext();
  return (
  <>
  <div>
   <form onSubmit={(e)=>e.preventDefault()}>
    <div style={{paddingTop:'15px'}}>
      <input style={{borderRadius:'10px'}}type="text" placeholder='Search Here !!' value={query}
      onChange={(e)=>searchPost(e.target.value)}/>
    </div>


   </form>


  </div>
  
  
  </>
  )
}

export default Search