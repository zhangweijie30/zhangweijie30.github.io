


// Reducer 是一个函数，它接受 Action 和当前 State 作为参数，返回一个新的 State
// Array.reduce()  累计计算 

// 它是一个纯函数。也就是说，只要是同样的输入，必定得到同样的输出  不能写异步 只能写同步


import {combineReducers } from "redux"
import {count} from "./count";
import {city} from "./city"
import {msg} from "./msg"
import { demo } from "./demo";


// reducers 
export const reducers = combineReducers({    // reducers 合并
    data:count,
    city,
    msg,
    demo:demo
})