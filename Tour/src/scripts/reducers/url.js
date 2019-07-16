import { COUNTADD, GETBANNER, SETTAB, SETNEWURL, SETOLDURL } from "../actions";



const defaultState = {
    oldUrl:"",
    newUrl:"",
    tab:"home"
}

export const myUrl = (state=defaultState,action)=>{
    switch(action.type){

        
        case SETOLDURL:
        return {...state,oldUrl:action.url}
        break;
        
        case SETNEWURL:
        return {...state,newUrl:action.url}
        break;

        case SETTAB:
        return {...state,tab:action.tab}
        default:
        return state;
        break;
    }
}