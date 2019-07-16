import "./index.scss";

import { Head } from "~/components/head"

import { connect } from "react-redux";

import { getCarGoods } from '../../actions';
import { axios } from "&";

import userInfo from "../../components/mobx/userInfo"

import { ListView, Toast, WingBlank, WhiteSpace, Button, Checkbox } from 'antd-mobile';

import { observer } from "mobx-react"
import car from "../../components/mobx/car";










@observer
export class Cart extends Component {





    componentWillMount() {

        var userInfo = sessionStorage.userInfo;
        var token = "";
        if (userInfo) {
            token = JSON.parse(userInfo).token;
        }

        if (token) {
            car.getCarList(token);
        } else {
            Toast.fail("亲,你还米有登录哟?~~~", 1);
            this.props.history.push("/login")
        }

    }



    checkOne = (e) => {
        console.log(e);
        console.log(e.target.checked);

        car.checkOne(e.target.checked, e.target.dataId)
    }

    checkAll = (e) => {
        console.log(e.target.checked);
        car.changeQuna(e.target.checked)
    }

    reduce = (goodId, count) => {
        if (count > 1) {
            car.changeOneCount(goodId, false);
        }
    }

    add = (goodId, count) => {
        car.changeOneCount(goodId, true);
    }

    changeCount = (goodId, e) => {

        var count = e.target.value;
        if (count > 1) {
            car.changeCount(goodId, count)
        }
    }

    gotoCart = () => {
        this.props.history.push("/app/order");
    }


    render() {

        const {
            carList,
            total,
            quan,
            carNum
        } = car;



        return (
            <div>
                <Head title="购物车" show={true} search={true} />

                <div style={{ display: carList ? "block" : "none" }}>
                    {
                        carList && carList.map((item, i) => {
                            return (
                                <div key={i} id={item._id}>
                                    <WingBlank />
                                    <WhiteSpace />
                                    <div className="move-in" style={{ display: '-webkit-box', display: 'flex', margin: '15px 5px' }}>
                                        <Checkbox dataId={item.goodId} onChange={this.checkOne} checked={item.checked}
                                        ></Checkbox>
                                        <img style={{ height: '84px', width: "84px", borderRadius: "10%", margin: '0 15px' }} src={item.good && item.good.images} alt="" />

                                        <div style={{ lineHeight: 1 }}>
                                            <div style={{ marginBottom: '12px', marginTop: "5px", fontSize: "18px", width: "230px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{item.good && item.good.name}</div>
                                            <div style={{ fontSize: '24px', color: '#FF6E27' }}>
                                                <Button inline size="small" type="primary" onClick={() => this.reduce(item.goodId, item.count)} style={{ marginLeft: "90px" }}>-</Button>
                                                <input goodsid={item.goodId} type="text" value={item.count} onChange={(v) => { this.changeCount(item.goodId, v) }} style={{ width: "34px", fontSize: '16px', textAlign: 'center', background: 'none', border: '0' }} />
                                                <Button inline size="small" type="warning" onClick={() => this.add(item.goodId, item.count)} style={{ marginLeft: "10px" }}>+</Button>
                                                <p style={{ fontSize: 18 }}>￥{item.good && item.good.price}</p>

                                            </div>

                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <WhiteSpace />
                <div style={{ display: !carList ? "block" : "none", fontSize: "20px", color: "#999", paddingLeft: "10px" }}>
                    暂未登录或冒有添加商品...
            </div>
                <div style={{ display: carList ? "block" : "none", width: "100%", height: "127px", position: "fixed", left: "0", bottom: "0", background: "#f5f5f5" }}>
                    <div>
                        <div style={{ width: "100%", height: "76px", backgroundColor: "rgba(0,0,0,0.5)", color: "#fff", fontSize: "18px" }}>
                            <div>
                                <Checkbox onClick={this.checkAll} checked={quan} style={{ width: "15px", height: "15px", lineHeight: "76px", marginLeft: "10px", marginTop: "30px" }} />全选
                            <span style={{ marginLeft: "20px" }}>总数:</span><span>{carNum}</span>
                                <span style={{ marginLeft: "20px" }}>总价:</span><span>{total}</span>
                                <span style={{ marginLeft: "30px" }} onClick={this.gotoCart} >提交订单</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

