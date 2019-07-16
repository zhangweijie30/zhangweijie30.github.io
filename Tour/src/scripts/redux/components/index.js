

import store from "../store"
import {Button} from "antd-mobile"

export class ReduxDemo extends Component{
    render(){
        console.log(this.props)
        const {
            data ,
            state
        } = this.props;
        const {
            data:{
                count
            },
            city,
            msg,
        }  = store.getState();
        return (
            <div>
                <h2> redux  </h2>
                <h2> 集中管理组件的 state 状态  数据共享 </h2>
                <h2>count === {data.count }  / {state.data.count } </h2>
                <h2> count ======= {count}</h2>
                <h2> city === {city}</h2>
                <h2> msg === {msg}</h2>
                <hr/>
                <Button onClick={()=>store.dispatch({type:"COUNTADD"})} inline type="primary" >count  add</Button>
            </div>
        )
    }
}