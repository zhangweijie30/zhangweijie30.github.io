

import "./index.scss";

import { Head } from "~/components/head"
import { WingBlank, List, InputItem, WhiteSpace, Button } from "antd-mobile";
import { NavLink } from 'react-router-dom';

import userInfo from "../../components/mobx/userInfo";
import { axios } from '../../../utils';


export const mobileReg = /^1(3|5|7|8|9)\d{9}$/;

export const codeReg = /^\d{4}$/;


let timer = null;

export class Login extends Component {


    state = {
        mDisable: true,
        loginDis: true,
        txt: "验证码(60s)",
        count: 60,
        flag: true
    }

    getCode = () => {

        axios.post("/react/sendCode", {
            mobile: this.mobile.state.value
        }).then(res => {
            console.log(res.data);
        })

        this.setState({


            flag: false,
            mDisable: true

        })

        this.start();


    }

    start = () => {
        timer = setInterval(() => {

            if (this.state.count > 0) {
                this.setState({
                    count: --this.state.count,
                    txt: "验证码" + this.state.count + "s"
                })
            } else {
                clearInterval(timer);
                this.setState({
                    count: 60,
                    txt: "验证码(60)s",
                    mDisable: false,
                    flag: true,
                })
            }

        }, 1000)
    }

    checkCode = (code) => {
        if (codeReg.test(code)) {

            this.setState({
                loginDis: false,

            })

        } else {

            this.setState({
                loginDis: true
            })

        }
    }

    getMobile = (mobile) => {
        console.log(mobile);
        console.log(this.code.state.value);
        // console.log(this.mobile.state.value); 
        if (mobileReg.test(mobile)) {
            this.setState({
                mDisable: false
            })
        } else {
            this.setState({
                mDisable: true
            })
        }
    }

    loginAuth = () => {
        axios.post("/react/checkCode", {
            mobile: this.mobile.state.value,
            code: this.code.state.value
        }).then(res => {
            console.log(res);

            if (!!res.data.type) {
                var token = res.data.token;
                sessionStorage.userInfo = JSON.stringify({ token });


                userInfo.getInfo(
                    { token },
                    true,
                    this.mobile.state.value
                )
                this.props.history.push("/app/mine");
            } else {
                sessionStorage.userInfo = "";

                userInfo.getInfo(
                    {},
                    false,
                    ""
                )
            }
        })
    }



    render() {
        const {
            mDisable,
            loginDis,
            txt
        } = this.state;
        return (
            <div>
                <Head title="登录" show={true} ></Head>
                <WhiteSpace />
                <WingBlank>
                    <List>
                        <WhiteSpace />
                        <InputItem
                            type="tel"
                            placeholder="请输入手机号"
                            ref={el => this.mobile = el}
                            onChange={this.getMobile}
                            clear
                        >手机号</InputItem>
                        <WhiteSpace />
                        <InputItem
                            type="number"
                            placeholder="请输入验证码"
                            ref={el => this.code = el}
                            onChange={this.checkCode}

                        >验证码 </InputItem>
                        <Button className="l-btn" type="warning" disabled={mDisable} onClick={this.getCode}>{txt}</Button>
                        <WhiteSpace />
                        <Button type="primary" disabled={loginDis} onClick={this.loginAuth}>登录</Button>
                    </List>
                </WingBlank>
                <NavLink className="denglu" to="/register" style={{ fontSize: 18, textAlign: "center", color: " black" }}>去注册?</NavLink>
            </div>
        )
    }
}