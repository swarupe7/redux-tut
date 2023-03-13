import React from 'react'

const reducer = (state,action) => {
   switch(action.type){
    case "GET_STORIES":
        return {
            ...state,
            isloading:false,
            hits:action.payload.hits,
            nbpages:action.payload.nbPages
        }

    case "SET_LOADING":
        return {
            ...state,
            isloading:true,
        }

        case  "SEARCH_QUERY":
            return {
                ...state,
                query:action.payload,
            }
        case "PrevPage":
            let prev=state.page-1;
            if(prev==-1){
                prev=state.nbpages-1;
            }
            if(prev<0){
                prev=0;
            }
            return {
                ...state,
                page:prev,

            }

        case "NextPage":
            let next=state.page+1;
            if(next>=state.nbpages){
                next=0;
            }
            return{
                ...state,
                page:next,
            }

        

    // case "REMOVE_POST":
    //     return {
    //         ...state,hits:state.hits.filter((curr)=>curr.objectID !==action.payload)
    //     }
   }

  return state;
}

export default reducer