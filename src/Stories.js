import React,{useEffect,useState,useContext} from 'react'
import { useGlobalContext } from './Context'

const Stories = () => {
    const {hits,nbPages,isloading}=useGlobalContext();
 if(isloading){
    return (
        <>
         <h1 style={{color:'white'}}>Loading...</h1>
        
        </>
    )
 }

  return (
    <>
     <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
  
    {
        hits.map((curr)=>{

            return (  


                <div class="rounded overflow-hidden shadow-lg" style={{backgroundColor:'white',borderRadius:'20px'}}  >
                
                <div class="px-6 py-4">
                  <div class="font-bold text-xl mb-2">{curr.title}</div>
                  <p class="text-gray-700 text-base" style={{marginTop:'15px',marginBottom:'1px'}}>    <span>By {curr.author}  |</span> <span>Comments:{curr.num_comments}</span>
                  </p>
                </div>
                <div class="px-6 pt-4 pb-2" style={{marginTop:'0px'}}>
                  <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-blue-700 mr-2 mb-2"> <a href={curr.url}>Read More</a></span>
                  
                 
                </div>
              </div>
            )

        }

        )
    }
    </div>
    
    
    </>
  )
}

export default Stories