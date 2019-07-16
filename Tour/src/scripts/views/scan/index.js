

import "./index.scss";

import {Head} from "~/components/head"

export class Scan extends Component{
    render(){
        return (
            <div>
                <Head title="扫一扫" show={true} ></Head>
            </div>
        )
    }
}