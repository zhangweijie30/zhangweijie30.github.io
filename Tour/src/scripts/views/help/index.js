

import "./index.scss";
import { Head } from '../../components/head';

export class Help extends Component {
    render() {

        return (
            <div>
                <Head title="帮助" show={true}></Head>
                <p style={{ marginTop: 30 }}>&emsp;&emsp;互联网正在慢慢地改变生活，这已经不仅仅是概念的演绎，在生活工作的各个方面，
                    都留下了互联网的印记。旅游业也不例外，据统计，网上旅游业销售额已经占到全球电子商务销售额的20%以上。
                    随着假日旅游、自助旅游、各种主题旅游的兴起，旅游网站也焕发着春天般的气息，一个好的网站对旅游资源的宣传和游客出行计划都有着积极的意义，让游客们有备而来、尽兴而归。
                    通过网站开展相关旅游资源的电子商务整合和旅游资源的管理都将会是旅游业不可回避的现实。</p>
            </div>


        )

    }
}