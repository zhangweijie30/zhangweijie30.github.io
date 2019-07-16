import "./index.scss";

import { Head } from "~/components/head"

import { connect } from "react-redux";
import { getGoodTypes, getAllGoods, getFenlei, getFenleiInit } from '../../actions';

import { Tabs, WhiteSpace, Badge } from "antd-mobile";

import { List } from "../../components/list"

@connect(
    state => {
        return {

            types: state.data.types,
            allGoods: state.data.allGoods

        }

    }
)
export class Classify extends Component {



    componentWillMount() {
        const { types, dispatch, allGoods } = this.props;
        if (allGoods.length <= 0) {
            dispatch(getAllGoods({
                url: "/react/tourlist"
            }))

            console.log(666, allGoods)
        }
        if (types.length <= 0) {
            dispatch(getGoodTypes({
                url: "/react/getGoodTypes"
            }))

        }


    }

    // componentDidMount() {
    //     console.log("1111")
    //     console.log(this.props);
    //     const { allGoods, types, dispatch } = this.props;
    //     setTimeout(() => {
    //         dispatch(getFenleiInit(allGoods, types[0]))
    //     }, 10)



    // }

    changeTab = val => {
        const {
            allGoods,
            dispatch,
        } = this.props

        var data = allGoods.filter(item => item.type.value == val.value);
        dispatch(getFenlei(data))
    }
    render() {


        const {
            types,
            allGoods,

        } = this.props
        console.log("xxxx");
        console.log(allGoods);

        const arr = [];
        types.map((item) => {
            return (
                arr.push({ title: item })
            )
        })
        console.log("oooooo");
        console.log(arr);

        return (
            <div>
                <Head title="分类" show={true}></Head>

                <Tabs tabs={arr}
                    initialPage={0}
                    tabBarUnderlineStyle={{ border: "2px solid red" }}
                    tabBarActiveTextColor="red"
                    onChange={this.changeTab}
                >
                    {
                        arr.map((item, i) => {
                            return (
                                <List key={i} pro={allGoods.filter(g => g.type == item.title)}>


                                </List>


                            )
                        })
                    }
                </Tabs>
                {/* <h2>Classify- Classify</h2> */}
            </div >
        )
    }
}