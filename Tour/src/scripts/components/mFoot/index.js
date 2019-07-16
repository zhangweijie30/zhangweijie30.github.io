
import { TabBar } from "antd-mobile"
import { foots } from "../foot";

import "./index.scss";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types"
import { history } from "&"
import { connect } from "react-redux"
import { setTab, setNewUrl } from "../../actions";
import car from "../mobx/car"
import { observer } from "mobx-react"
@connect(
    state => {
        console.log(state);
        return {
            tab: state.myUrl.tab
        }
    }
)

@observer
export class MFoot extends Component {
    state = {
        foots,
        // selectedTab:"home"
    }

    renderContent = (tab, path) => {
        return (
            <NavLink to={path} >

            </NavLink>
        )
    }

    componentWillMount() {
        console.log("will")
        const hash = location.hash;
        const tab = hash.split("#/app/")[1];
        this.props.dispatch(setTab(tab))
        this.props.dispatch(setNewUrl(tab));
        // this.setState({
        //     selectedTab:tab
        // })
    }

    render() {
        const {
            carNum
        } = car;
        return (
            <div className="mfoot">
                <TabBar
                    unselectedTintColor="#949494"
                    tintColor="#33A3F4"
                    barTintColor="pink"
                >
                    {
                        this.state.foots.map((foot, i) => {
                            return (
                                <TabBar.Item
                                    title={foot.txt}
                                    key={i}
                                    icon={<i style={{
                                        width: '22px',
                                        height: '22px',
                                        display: "block"
                                    }}
                                        className={"iconfont icon " + foot.icon}
                                    />
                                    }
                                    selectedIcon={<i style={{
                                        width: '22px',
                                        height: '22px',
                                        display: "block"
                                    }}
                                        className={"iconfont icon " + foot.icon}
                                    />
                                    }
                                    // selected={this.state.selectedTab === foot.name }
                                    selected={this.props.tab === foot.name}

                                    badge={i == 2 && carNum}
                                    onPress={() => {
                                        // console.log(this.context);
                                        this.props.dispatch(setTab(foot.name))
                                        history.push(foot.path);
                                    }}
                                    data-seed="logId"
                                >
                                    {/* {this.renderContent(foot.name,foot.path)} */}
                                </TabBar.Item>
                            )
                        })
                    }
                </TabBar>
            </div>
        )
    }
}

MFoot.contextTypes = {
    history: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,

}