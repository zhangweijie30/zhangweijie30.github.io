import "./index.scss";

import { Head } from "~/components/head";
import { axios } from "&";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Carousel, NoticeBar, WhiteSpace } from 'antd-mobile'
import { getAllGoods } from '../../actions';

import { List } from '~/components/list'


@connect(
  state => {
    return {
      allGoods: state.data.allGoods
    }
  }
)

export class Home extends Component {
  state = {

    data: [
      { img: "http://img.cyw.com/shopx/20130321100555766305/shopinfo/201803/2018031916202198.jpg" },
      { img: "http://img.cyw.com/shopx/20130528145300770288/shopinfo/201804/2018041711195657.jpg" },
      { img: "http://img.cyw.com/shopx/20120604161128037636/shopinfo/201808/2018080409162626.jpg" },

    ],
    goods: []
  }

  componentWillMount() {


    const { dispatch, allGoods } = this.props;

    // axios.get("/react/tourlist").then(res => {

    //   this.setState({
    //     goods: res.data.result
    //   })
    // })

    dispatch(getAllGoods({
      url: "/react/tourlist"
    }))
    // console.log(res);
  }
  render() {
    // console.log(1111, this.state.goods);
    const { allGoods } = this.props;
    console.log(allGoods);
    return (
      <div>
        <Head title="首页" show={true} ></Head>
        <Carousel
          autoplay={true}
          infinite={true}
          beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          afterChange={index => console.log('slide to', index)}
        >
          {this.state.data.map((val, i) => (
            <a
              key={i}

              style={{ display: 'inline-block', width: '100%', height: 200 }}
            >
              <img
                src={val.img}
                alt=""
                style={{ width: '100%', verticalAlign: 'top', height: 200 }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            </a>
          ))}
        </Carousel>


        <NoticeBar marqueeProps={{ loop: true, style: { padding: '0 7.5px' } }}>
          通知: 欢迎光临天堂旅游网,本旅游网优惠大促,七折大酬宾,惊喜多多,优惠多多！.
    </NoticeBar>
        <div >
          <video style={{ width: "100%", height: 220 }} src="http://hc.yinyuetai.com/uploads/videos/common/B574016B9C30679DA0A71A548C5DE6ED.mp4?sc=f3b9130b871c2bff&br=781&vid=3386867&aid=215&area=ML&vst=0" controls autoPlay="autoplay" loop></video>
        </div>

        {

          <List pro={allGoods} >

          </List>

        }





      </div>
    )
  }
}