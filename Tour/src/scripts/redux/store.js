

// Store 就是保存数据的地方，你可以把它看成一个容器。整个应用只能有一个 Store

import {createStore} from "redux";
import { reducers } from "./reducers";

const store = createStore(reducers);    // fn reducers 

const state = store.getState();  // 获取state 快照 

console.log(state);

export default store;
