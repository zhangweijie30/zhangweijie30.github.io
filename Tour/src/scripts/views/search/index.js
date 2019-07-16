import "./index.scss";

import { Head } from "~/components/head"
import { SearchBar } from 'antd-mobile';
import { connect } from "react-redux"
import { getSearchGoods } from '../../actions';
import { List } from '../../components/list';




@connect(
    state => {
        return {
            findGoods: state.data.findGoods,

        }

    }
)


export class Search extends Component {
    submit = (val) => {
        console.log("submit " + val)
        const { dispatch } = this.props;
        dispatch(getSearchGoods({
            url: "/react/getSearchGoods",
            params: {
                keyword: val
            }
        }))
    }
    change = (val) => {
        console.log("change " + val)
    }
    render() {
        const { findGoods } = this.props

        console.log(this.props);

        return (
            <div>
                <Head title="搜索" show={true} ></Head>
                <SearchBar
                    placeholder="Search"
                    maxLength={8}
                    onSubmit={this.submit}
                    onChange={this.change}
                />

                <List pro={findGoods}></List>











            </div>
        )
    }
}