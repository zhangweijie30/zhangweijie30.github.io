

import {Button,WhiteSpace} from "antd-mobile"

export class Demo extends Component{
    render(){
        return (
            <div>
                <Button inline>default</Button><WhiteSpace />
                <Button disabled inline>default disabled</Button><WhiteSpace />

                <Button type="primary" inline>primary</Button><WhiteSpace />
                <Button type="primary" inline disabled>primary disabled</Button><WhiteSpace />

                <Button type="warning" inline>warning</Button><WhiteSpace />
                <Button type="warning" inline disabled>warning disabled</Button><WhiteSpace />

            </div>
        )
    }
}