


import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom"
import { Guide } from "./guide";
import { App } from "./app";
import { Search } from "./search";
import { Login } from "./login";
import { Scan } from "./scan";
import { Help } from './help';
import { Setting } from './setting';


import { Good } from './good';
import { Register } from "./register"





import PropTypes from "prop-types"
import { Personal } from './personal';



export class IndexView extends Component {
    render() {
        return (
            <Router
                basename="/"
            >
                <div id="main">
                    <Route component={Layout} />
                </div>
            </Router>
        )
    }
}


// 所有路由配置 Layout 
export class Layout extends Component {

    getChildContext() {
        return {
            history: this.props.history,
            location: this.props.location,
            match: this.props.match
        }
    }

    render() {
        return (
            <Switch>
                <Route path="/" component={Guide} exact />
                <Route path="/guide" component={Guide} />
                <Route path="/app" component={App} />
                <Route path="/search" component={Search} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/scan" component={Scan} />
                <Route path="/help" component={Help} />
               
                <Route path="/setting" component={Setting} />

                <Route path="/good/detail/:goodId?" component={Good} />

                <Route
                    render={
                        () => (<Redirect to="/app/home" />)
                    }
                />
            </Switch>
        )
    }
}

Layout.childContextTypes = {
    history: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,
}
