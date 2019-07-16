



import "./index.scss"
import { Head } from "~/components/head";
import { connect } from "react-redux";
import { getDetailGood } from '../../actions';
import { axios } from "&";
import { WingBlank, SegmentedControl, WhiteSpace, Card, Button, Stepper, Toast } from "antd-mobile";
import car from "../../components/mobx/car";
import { List, InputItem } from 'antd-mobile';
import { history } from "&"
import { WSAEINVALIDPROVIDER } from "constants";


@connect(
    state => {
        return {
            good: state.data.good
        }
    }
)



export class Good extends Component {

    state = {
        flag: false,
        comments: []
    }
    componentWillMount() {
        const { dispatch, match } = this.props;



        dispatch(getDetailGood({
            url: "/react/getGoodOne",
            params: {
                goodId: match.params.goodId
            }
        }))

        if (sessionStorage.userInfo) {

            // window.location.reload();

            axios.post("/react/findComment", {
                goodId: match.params.goodId,
                userInfo: JSON.parse(sessionStorage.userInfo).token,

            }).then(res => {
                console.log("******************************************")
                console.log(res);
                this.setState({
                    comments: res.data.result
                })


            })


        } else {
            Toast.fail("获取评论列表失败,请登录");
        }


    }
    changeCount = val => {
        this.setState({
            count: val
        })
    }

    submit = () => {
        const { match } = this.props;
        axios.post("/react/addpinlun", {
            userInfo: JSON.parse(sessionStorage.userInfo).token,
            title: this.title.state.value,
            content: this.content.state.value,
            goodId: match.params.goodId,
        }).then(res => {
            console.log(res);
            if (res) {
                window.location.reload();
            }
        })
        // 
    }

    addToCar = () => {


        const {
            match,
            good
        } = this.props



        if (sessionStorage.userInfo) {

            console.log(JSON.parse(sessionStorage.userInfo).token);

            axios.post("/react/addtoCart", {
                goodId: match.params.goodId,
                count: this.state.count,
                good: JSON.stringify(good),
                userInfo: JSON.parse(sessionStorage.userInfo).token
            }).then(res => {
                console.log(res);
                Toast.hide()
            })


            // console.log("来买啊");
        } else {
            Toast.info("您还未登录,无法购买商品");
        }




    }

    gotoCart = () => {
        if (sessionStorage.userInfo) {

            // console.log("去购物车看看");
            history.push("/app/cart");

        } else {
            Toast.info("您还未登录,请登录")
        }

    }

    add = () => {
        this.setState({
            flag: true
        })

    }

    getTitle = (title) => {

        console.log(title);

    }

    getContent = (content) => {
        console.log(content);
    }



    state = {
        count: 1
    }
    render() {

        const {
            location,
            good
        } = this.props;
        const {
            count,
            flag,
            comments
        } = this.state

        console.log(222, good);
        return (
            <div>
                <Head title="商品详情" show={true}></Head>
                <img src={good.images} alt="" style={{ width: "100%", height: 300 }} />
                <h2 style={{ color: "#CD5C5C" }}>
                    {good.name}
                </h2>
                <h2 style={{ color: "red" }}>￥{good.price}</h2>
                <h2 style={{ color: "#CD5C5C" }}>{good.site}</h2>
                <div>
                    <h2 style={{ color: "#CD5C5C" }}> 购买数量 :</h2>
                    <Stepper
                        showNumber
                        min={1}
                        defaultValue={count}
                        onChange={this.changeCount}
                    />

                </div>
                <Button type="primary" onClick={this.addToCar} style={{ marginRight: 20 }} inline>加入购物车</Button>
                <Button type="warning" inline onClick={this.gotoCart}>立即购买</Button>

                <div style={{ marginTop: 20 }} className="com">评论列表:

                    {



                        comments && comments.map((comment, i) => {



                            return (
                                <div key={i}>


                                    <p>用户:{comment.userInfo}</p>
                                    <p>评论标题:{comment.title}</p>

                                    <p>评论内容:{comment.content}</p>

                                </div>



                            )


                        })


                    }


                </div>
                <Button type="warning" onClick={this.add} inline style={{ marginTop: 10 }}>新增评论</Button>
                <List style={{ display: flag ? "block" : "none" }}>



                    <InputItem


                        placeholder="auto focus"
                        ref={el => this.title = el}
                        onChange={this.getTitle}
                    >标题</InputItem>
                    <InputItem


                        placeholder="click the button below to focus"
                        ref={el => this.content = el}
                        onChange={this.getContent}
                    >内容</InputItem>
                    <Button type="primary" onClick={this.submit}>提交评论</Button>



                </List>
            </div>
        )
    }
}