

// 整个应用的初始状态，可以作为 State 的默认值
//  state 只能在 reducers 初始化 
const defaultState = {
    count:1902,
    num:8888
}

// Reducer 是一个函数，它接受 Action 和当前 State 作为参数，返回一个新的 State

// 2个参数  state  action 
export const count = (state=defaultState,action) =>{
    console.log(action);

    switch(action.type){
        case "COUNTADD":
        // state.count++;
        return {...state,count:++state.count}
        break;

        default:
        return state;
        break;
    }
}