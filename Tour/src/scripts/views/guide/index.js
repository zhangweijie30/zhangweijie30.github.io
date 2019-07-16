


import "./index.scss"
import { Demo } from "../../components/demo";
import {Swipe} from "~/components/swipe";
const SwipeItem = Swipe.Item;

export class Guide extends Component{

    state = {
        banner:[
            require("@/assets/images/timg.jpg"),
            require("@/assets/images/timg1.jpg"),
            require("@/assets/images/timg2.jpg"),
            require("@/assets/images/timg3.jpg")
        ]
    }

    gotoApp=(index)=>{
        const {history} = this.props;
        if(index==this.state.banner.length-1){
            history.push("/app/home");
        }
    }

    componentWillMount(){
        const {history} = this.props;
        if(localStorage.reactCount){
            localStorage.reactCount++;
            if(localStorage.reactCount>3){
                history.push("/app/home");
            }
        }else{
            localStorage.reactCount = 1;
        }
    }

    render(){
        const {
            banner
        } = this.state;
        return (
            <div className="box">
                {/* <h2 className="g-box">guide - guide -guide </h2>
                <Demo/> */}

                <Swipe id="guide" options={{speed:1500,loop:false}}>
                    {
                        banner.map((item,i)=>{
                            return (
                                <SwipeItem key={i}>
                                    <img onClick={()=>this.gotoApp(i)} src={item} className="g-img" alt=""/>
                                </SwipeItem>
                            )
                        })
                    }
                </Swipe>

                
            </div>
        )
    }
}