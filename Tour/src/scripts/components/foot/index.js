

import "./index.scss";

import { NavLink } from "react-router-dom";
export const foots = [
    { txt: "首页", path: "/app/home", name: "home", icon: "icon-home" },
    { txt: "分类", path: "/app/classify", name: "classify", icon: "icon-goodsfill" },
    { txt: "发现", path: "/app/cart", name: "cart", icon: "icon-find2" },
    { txt: "我", path: "/app/mine", name: "mine", icon: "icon-minefill" }
];

import { Badge } from "antd-mobile"


export class Foot extends Component {
    state = {
        foots
    }
    render() {
        const {
            foots
        } = this.state;
        return (
            <footer >
                {
                    foots.map((foot, i) => {
                        return (
                            <div key={i}>
                                <NavLink to={foot.path} activeClassName="nav-active">
                                    <i className={"iconfont icon " + foot.icon}> </i>
                                    <span> {foot.txt}</span>
                                    {i == 2 && <Badge className="hot" text="10" hot style={{ marginLeft: 12 }} />}
                                </NavLink>
                            </div>
                        )
                    })
                }
            </footer>
        )
    }
}