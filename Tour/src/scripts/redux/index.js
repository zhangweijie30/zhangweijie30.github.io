



import ReactDOM , {render} from "react-dom";
import { ReduxDemo } from "./components";

import store from "./store";
const state = store.getState();

export class IndexCPT extends Component{
    render(){
        return (
            <ReduxDemo
                state = {state}
                {...store.getState()}
            />
        )
    }
}

const hotRender = ()=>{
    render(
        <IndexCPT/>,
        document.getElementById("app")
    )
}

hotRender();  // 渲染组件视图函数

// Store 允许使用store.subscribe方法设置监听函数

store.subscribe(hotRender) // state 改变一定会重新执行  