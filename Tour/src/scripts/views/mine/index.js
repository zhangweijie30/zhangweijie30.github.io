import "./index.scss";

import { Head } from "~/components/head"
import { Button, WhiteSpace } from "antd-mobile"
import { connect } from "react-redux"
import userInfo from "../../components/mobx/userInfo";
import { ImagePicker } from 'antd-mobile';
import { SwipeAction, List } from 'antd-mobile';

import { observer } from "mobx-react";

@observer
export class Mine extends Component {
    goLogin = () => {
        this.props.history.push("/login")
    }

    about = () => {
        this.props.history.push("/help");
    }
    sets = () => {

        this.props.history.push("/setting");
    }
    personal = () => {
        this.props.history.push("/app/personal");
    }
    gotoCart = () => {
        this.props.history.push("/app/cart");
    }
    render() {

        const {
            isLogin,
            mobile
        } = userInfo;
        return (
            <div>
                <Head title="个人中心" show={true}></Head>
                <div style={{ display: isLogin ? "block" : "none" }}>

                    <img src={require("@/assets/images/timg.jpg")} style={{ width: 50, height: 50, borderRadius: '50%' }} alt="上传头像" />
                    <h2 style={{ color: "red", marginTop: 10 }}>{mobile}用户,你好 </h2>

                    <List.Item
                        type
                        arrow="horizontal"
                        onClick={this.personal}
                        style={{ marginTop: 80 }}
                    >
                        我的资料
                    </List.Item>

                    <List.Item

                        arrow="horizontal"

                        style={{ marginTop: 20 }}
                    >
                        我的评论
                    </List.Item>


                    <List.Item

                        arrow="horizontal"
                        onClick={this.gotoCart}
                        style={{ marginTop: 20 }}
                    >
                        我的购物车
                    </List.Item>

                    <List.Item

                        arrow="horizontal"
                        onClick={this.sets}
                        style={{ marginTop: 20 }}
                    >
                        设置
                    </List.Item>

                    <List.Item

                        arrow="horizontal"
                        onClick={this.about}
                        style={{ marginTop: 20 }}
                    >
                        关于我们
                    </List.Item>



                </div>
                <div style={{ display: !isLogin ? "block" : "none" }} >
                    <h2 style={{ textAlign: "center" }}> 您还未登录呢?</h2>
                    <div style={{ textAlign: "center" }}>
                        <Button style={{ textAlign: "center", marginTop: 10 }} onClick={this.goLogin} type="primary" inline>马上登录</Button><WhiteSpace />
                    </div>
                </div>

            </div>
        )
    }
}