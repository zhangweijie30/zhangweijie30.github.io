import { List, Switch } from 'antd-mobile';
import { createForm } from 'rc-form';

import { Head } from "~/components/head"



export class Setting extends Component {

    constructor(props) {
        super(props);
        this.state = {
            checked: false,
            checked1: true,
        };
    }
    render() {

        // const { getFieldProps } = this.props.form;
        return (
            <div>
                <Head title="设置" show={true}></Head>
                <List.Item
                    extra={<Switch
                        checked={this.state.checked}
                        onChange={() => {
                            this.setState({
                                checked: !this.state.checked,
                            });
                        }}
                        platform="ios"
                        color="#4dd865"
                        disabled={false}
                    />}
                >打开声音</List.Item>

            </div >
        )
    }
}

