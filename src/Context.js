import React,{useContext,useReducer,useEffect} from 'react';
import reducer from './reducer';
import './App.css';
const AppContext=React.createContext();

const initialState={
   
    isloading:true,
    query:'html',
    nbPages:0,
    page:0,
    hits:[]
    
    
}



const AppProvider=({children})=>{
    const [state,dispatch]=useReducer(reducer,initialState);
        // const [isloading,setisloading]=useState(true);
    let Api="https://hn.algolia.com/api/v1/search?";
    const fetchData=async (url)=>{
        dispatch({type:"SET_LOADING"})
        try{
             const res=await fetch(url);
             const data=await res.json();
             console.log(data);
            //  setisloading(false);
            dispatch({type:"GET_STORIES",payload:{hits:data.hits,nbPages:data.nbPages}});
            
           
        }catch(error){
            console.log(error);
        }
         
    }

    // const removePost=(id)=>{
    //     dispatch({type:"REMOVE_POST",payload:id});
    // }
    
    const searchPost=(searchquery)=>{
        dispatch({type:"SEARCH_QUERY",payload:searchquery})
    };

    const getPrevPage=()=>{
        dispatch({type:"PrevPage"})
    }
    const getNextPage=()=>{
        dispatch({type:"NextPage"});
    }



    useEffect(()=>{
        fetchData(`${Api}query=${state.query}&page=${state.page}`);
    },[state.query,state.page]);


    return (
     <AppContext.Provider value={{...state,searchPost,getNextPage,getPrevPage}}>{children}</AppContext.Provider>

    )
}

const useGlobalContext=()=>{
    return  useContext(AppContext);
}

export {AppContext,AppProvider,useGlobalContext};