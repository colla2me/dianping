import React from 'react'
import ReactSwipe from 'react-swipe'
import './style.less'

class GroupInfo extends React.Component{
  constructor(props, context){
    super(props, context)
    this.state = {
      swipPageNo: 1
    }
  }
  render() {
    const options = {
      // auto: 1400,
      continuous: false,
      callback: function(index){
        this.setState({swipPageNo: index+1})
      }.bind(this)
    }
    const imageUrls = [
      "https://p1.meituan.net/deal/59907eded5644631998d00b84fe48ead173935.jpg%40450w_280h_1e_1c_1l%7Cwatermark%3D1%26%26r%3D1%26p%3D9%26x%3D2%26y%3D2%26relative%3D1%26o%3D20",
      "https://p0.meituan.net/deal/0e24f0af03347ca793fd932e3cbb774a104060.jpg%40450w_280h_1e_1c_1l%7Cwatermark%3D1%26%26r%3D1%26p%3D9%26x%3D2%26y%3D2%26relative%3D1%26o%3D20",
      "https://p0.meituan.net/deal/535391e32397a72016a991b5bd8eda0e92129.jpg%40450w_280h_1e_1c_1l%7Cwatermark%3D1%26%26r%3D1%26p%3D9%26x%3D2%26y%3D2%26relative%3D1%26o%3D20"
    ]
    return (
      <div className="group-info">
        <div className="slider">
          <ReactSwipe swipeOptions={options}>
            {imageUrls.map((url, idx) => {
              return <figure key={idx}>
              <img src={url} width="100%"/>
            </figure>
            })}
          </ReactSwipe>
          <div className="swipe-page-ctrl">
            <strong className="swipe-page">{this.state.swipPageNo}</strong>/3
          </div>
          <div className="swipe-page-desc">
            <h3>空中一号</h3>
            <p>仅售888元！价值1721元的8人龙虾海鲜餐，提供免费WiFi。</p>
          </div>
        </div>
        <div className="group-buy">
          <div className="buy-box">
            <span className="price">￥<strong className="price-num">888</strong></span>
            <del className="price-old">￥1721</del>
            <a className="buy-btn">立即购买</a>
          </div>
          <div className="advantage">
            <span>
              <i></i>随时可退
            </span>
            <span>
              <i className="outdated"></i>过期自动退
            </span>
          </div>
        </div>
      </div>
    )
  }
}

export default GroupInfo