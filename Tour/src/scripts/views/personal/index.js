
import "./index.scss";
import { Head } from '../../components/head';

import { DatePicker, List, Button, Modal } from 'antd-mobile';
import enUs from 'antd-mobile/lib/date-picker/locale/en_US';
import { InputItem, Toast } from 'antd-mobile';


const nowTimeStamp = Date.now();
const now = new Date(nowTimeStamp);
// GMT is not currently observed in the UK. So use UTC now.
const utcNow = new Date(now.getTime() + (now.getTimezoneOffset() * 60000));

// Make sure that in `time` mode, the maxDate and minDate are within one day.
let minDate = new Date(nowTimeStamp - 1e7);
const maxDate = new Date(nowTimeStamp + 1e7);


if (minDate.getDate() !== maxDate.getDate()) {
    // set the minDate to the 0 of maxDate
    minDate = new Date(maxDate.getFullYear(), maxDate.getMonth(), maxDate.getDate());
}






export class Personal extends Component {



    state = {
        date: now,
        time: now,
        utcDate: utcNow,
        dpValue: null,
        customChildValue: null,
        visible: false,
    }

    changeDate = () => {
        console.log(111)
    }

    getName = (value) => {

        // console.log(value);
        sessionStorage.name = value;

    }

    setInfo = () => {



        this.props.history.push("/app/mine");
    }





    render() {

        const {
            history
        } = this.props





        return (
            <div>
                <Head title="个人资料" show={true}></Head>

                <DatePicker
                    mode="date"
                    title="Select Date"
                    minuteStep={2}
                    extra="Optional"
                    value={this.state.date}
                    onChange={date => this.setState({ date })}


                >
                    <List.Item arrow="horizontal" style={{ marginTop: 30 }} onChange={this.changeDate}>出生日期</List.Item>
                </DatePicker>

                <InputItem
                    type="text"
                    placeholder="input your phone"
                    error={this.state.hasError}
                    ref={el => this.value = el}
                    onChange={this.getName}
                >昵称</InputItem>
                <div style={{ textAlign: "center", marginTop: 30 }}>
                    <Button inline type="primary"
                        onClick={this.setInfo}>确认修改
                    </Button>
                </div>



            </div>
        )
    }
}