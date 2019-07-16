import "./index.scss";

import { Switch, Route, Redirect } from "react-router-dom"
import { Home } from "../home";
import { Classify } from "../classify";
import { Cart } from "../cart";
import { Mine } from "../mine";
import { Foot } from "../../components/foot";
import { MFoot } from "../../components/mFoot";
import { Personal } from '../personal';
import { Order } from '../order';




export class App extends Component {
    render() {
        return (
            <div className="box">

                <Switch>
                    <Route path="/app/home" component={Home} />
                    <Route path="/app/classify" component={Classify} />
                    <Route path="/app/cart" component={Cart} />
                    <Route path="/app/mine" component={Mine} />
                    <Route path="/app/personal" component={Personal} />
                    <Route path="/app/order" component={Order} />
                    {/* <Route component={Home} /> */}
                    <Route render={
                        () => (<Redirect to="/app/home" />)
                    } />
                </Switch>

                {/* <Foot/> */}
                <MFoot />
            </div>
        )
    }
}