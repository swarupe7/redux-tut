const initialNum=0;

const changeNum=(state=initialNum,action)=>{

    switch(action.type){
        case "INCR":
            return state+1;

        case "DECR":
            return state-1;

        default:
            return state;
    }

}


export default changeNum;