import React from 'react'
import { useGlobalContext } from './Context'

const Pagination = () => {
  const {page,nbpages,getPrevPage,getNextPage}=useGlobalContext();
  return <>
  
  <div className="pagination_btn" style={{marginLeft:'40%'}}>
    <button  onClick={()=>getPrevPage()}>PREV</button>
    <p style={{color:'white'}}>{page + 1}  of  {nbpages}</p>
    <button onClick={()=>getNextPage()}>NEXT</button>


  </div>
  
  
  
  </> 
    
  
}

export default Pagination