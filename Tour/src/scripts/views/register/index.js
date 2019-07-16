

import "./index.scss";

import { Head } from "~/components/head"
import { WingBlank, List, InputItem, WhiteSpace, Button } from "antd-mobile";
import { NavLink } from 'react-router-dom';
import userInfo from "../../components/mobx/userInfo";
import { axios } from '../../../utils';






export const mobileReg = /^1(3|5|7|8|9)\d{9}$/;

export const codeReg = /^\d{4}$/;

let timer = null;


export class Register extends Component {
    state = {
        mDisable: true,
        regiDis: true,
        txt: "验证码(60s)",
        count: 60,
        flag: true
    }
    getMobile = (mobile) => {

        console.log(mobile);

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

    getCode = () => {

        axios.post("/react/sendCode", {
            mobile: this.mobile.state.value
        }).then(res => {
            console.log(res.data)
        })
        this.setState({
            mDisable: true,
            flag: false
        })
        this.startTime();
    }



    startTime() {
        timer = setInterval(() => {
            if (this.state.count > 0) {
                this.setState({
                    count: --this.state.count,
                    txt: '倒计时' + this.state.count + "s",
                })
            } else {
                clearInterval(timer);
                this.setState({
                    count: 60,
                    txt: "验证码(60s)",
                    flag: true,
                    mDisable: false
                })
            }
        }, 1000)
    }

    checkCode = (code) => {
        if (codeReg.test(code)) {
            this.setState({
                regiDis: false,
            })
        } else {
            this.setState({
                regiDis: true
            })
        }
    }

    regisAuth = () => {
        axios.post("react/checkCode", {
            mobile: this.mobile.state.value,
            code: this.code.state.value,
            name: this.state.name

        }).then(res => {
            if (!!res.data.type) {
                var token = res.data.token;
                sessionStorage.userInfo = JSON.stringify({ token });

                userInfo.gotInfo(
                    { token },
                    true,
                    this.mobile.state.value,
                    this.name.state.value

                )
                this.props.history.push("/login");
            } else {
                sessionStorage.userInfo = "";
                userInfo.gotInfo(
                    {},
                    false,
                    ""
                )
            }
        })
    }



    getName = (name) => {
        // console.log(name);

        sessionStorage.name = JSON.stringify(name);

    }
    render() {

        const {
            mDisable,
            regiDis,
            txt
        } = this.state;
        return (
            <div>
                <Head title="注册" show={true} ></Head>
                <WhiteSpace />
                <WingBlank>
                    <List>
                        <WhiteSpace />
                        <InputItem
                            type="tel"
                            placeholder="请输入手机号"
                            clear
                            ref={el => this.mobile = el}
                            onChange={this.getMobile}

                        >手机号</InputItem>

                        <InputItem
                            type="tel"
                            placeholder="请输入昵称"
                            clear
                            ref={el => this.name = el}
                            onChange={this.getName}

                        >昵称</InputItem>
                        <WhiteSpace />
                        <InputItem
                            type="number"
                            placeholder="请输入验证码"
                            ref={el => this.code = el}
                            onChange={this.checkCode}

                        >验证码 </InputItem>
                        <Button className="l-btn" onClick={this.getCode} type="warning" disabled={mDisable} inline >{txt}</Button>
                        <WhiteSpace />
                        <Button type="primary" disabled={regiDis} onClick={this.regisAuth} >注册</Button>
                    </List>
                </WingBlank>
                <NavLink to="/login" className="register" style={{ fontSize: 18, textAlign: "center", color: " black" }}>已有账号,去登录-></NavLink>
            </div>
        )
    }
}
