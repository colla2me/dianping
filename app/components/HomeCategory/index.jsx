import React from 'react'
import ReactSwipe from 'react-swipe'

import './style.less'

class Category extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      index: 0
    }
  }
  render() {
    const options = {
      // auto: 1400,
      continuous: false,
      callback: function(index){
        this.setState({index: index})
      }.bind(this)
    }
    const categories = [
      {
        name: '美食',
        imgSrc: 'http://www.dpfile.com/sc/eleconfig/20160126194705meishi.png'
      },
      {
        name: '猫眼电影',
        imgSrc: 'http://www.dpfile.com/sc/eleconfig/20170223152109dp_wx_maoyan_icon.png'
      },
      {
        name: '酒店',
        imgSrc: 'http://www.dpfile.com/sc/eleconfig/20160126203337jiudian.png'
      },
      {
        name: '休闲娱乐',
        imgSrc: 'http://www.dpfile.com/sc/eleconfig/20160126202841xiuxianyule.png'
      },
      {
        name: '外卖',
        imgSrc: 'http://www.dpfile.com/sc/eleconfig/20160126203251waimai.png'
      },
      {
        name: '火锅',
        imgSrc: 'http://www.dpfile.com/sc/eleconfig/20160204172927huoguo.png'
      },
      {
        name: '丽人',
        imgSrc: 'http://www.dpfile.com/sc/eleconfig/20160126202946liren.png'
      },
      {
        name: '周边游',
        imgSrc: 'http://www.dpfile.com/sc/eleconfig/20160126203440zhoubianyou.png'
      },
      {
        name: 'KTV',
        imgSrc: 'http://www.dpfile.com/sc/eleconfig/20160126203542ktv.png'
      },
      {
        name: '婚纱摄影',
        imgSrc: 'http://www.dpfile.com/sc/eleconfig/20160126203830jiehun.png'
      }
    ]
    return (
      <div className="nav">
        <div className="index-category">
          <ReactSwipe
            className="carousel"
            swipeOptions={options}>
            <div className="page">
              {categories.map((item, idx) => {
                return <a className="item" href="javascript:;" key={idx}>
                <img src={item.imgSrc}/>
                <div>{item.name}</div>
              </a>
              })}
            </div>
            <div className="page">
              {categories.map((item, idx) => {
                return <a className="item" href="javascript:;" key={idx}>
                <img src={item.imgSrc}/>
                <div>{item.name}</div>
              </a>
              })}
            </div>
            <div className="page">
              {categories.map((item, idx) => {
                return <a className="item" href="javascript:;" key={idx}>
                <img src={item.imgSrc}/>
                <div>{item.name}</div>
              </a>
              })}
            </div>
          </ReactSwipe>

          <ol className="indicators">
            <li className={this.state.index === 0 ? 'circle on':'circle'}></li>
            <li className={this.state.index === 1 ? 'circle on':'circle'}></li>
            <li className={this.state.index === 2 ? 'circle on':'circle'}></li>
          </ol>
        </div>
      </div>
    )
  }
}

export default Category