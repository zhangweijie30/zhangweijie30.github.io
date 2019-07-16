


// 封装 swiper 组件 轮播图   new Swiper  

export class Swipe extends Component{
    render(){
        const {
            children,
            id
        } = this.props;
        return (
            <div className="swiper-container" id={id}>
                <div className="swiper-wrapper">
                    {
                        children
                    }
                </div>
            </div>
        )
    }

    componentDidMount(){
        // 同步数据 
        const {
            id,
            options,
            children
        } = this.props;
        if(children.length>0){
            const mySwiper = new Swiper("#"+id,options)
        }
    }

    componentDidUpdate(){
        // 异步数据刷新 
        const {
            id,
            options,
            children
        } = this.props;
        if(children.length>0){
            const mySwiper = new Swiper("#"+id,options)
        }
    }
}

// 静态属性 
Swipe.Item = (props)=>{
    return (
        <div className="swiper-slide">
            {props.children}
        </div>
    )
}