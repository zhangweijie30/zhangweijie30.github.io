

import "./index.scss"
import { Link } from "react-router-dom";
import { getSearchGoods } from "../../actions";


export class List extends Component {


    render() {

        const {
            pro
        } = this.props
        console.log("xxxxxxxx");
        console.log(pro);


        return (

            <div>
                {
                    pro.map((item, i) => {
                        return (
                            <Link key={i} to={"/good/detail/" + item._id + "?title=" + item.name + "&price=" + item.price} >
                                <div style={{ width: '48%', height: 274.4, float: "left", marginRight: '1%' }} className="good">

                                    <img src={item.images} alt="" style={{ width: '100%', height: 200 }} />
                                    <h2 style={{ width: "100%", color: "#CD5C5C", fontWeight: "normal" }}>{item.name}</h2>
                                    <h2 style={{ width: "100%", color: "#CD5C5C", fontWeight: "normal" }}>￥{item.price}/人</h2>
                                    {/* <h3>{pro.site}</h3> */}
                                </div>
                                <div className="some">
                                </div>
                            </Link>
                        )
                    })
                }
            </div>



        )
    }
}