import React from 'react'

import './style.less'

class DownloadGuide extends React.Component {
  constructor(props, context) {
    super(props, context)
  }
  render() {
    return (
      <div className="download-guide">
        <div className="wrapper">
          <div className="content">
            <div className="title">
              <i className="icon"></i>
              <span className="text">吃喝玩乐，找优惠</span>
            </div>
            <div className="btns">
              <a className="btn-openapp" href="javascript:;">打开大众点评</a>
              <a className="btn-download" href="javascript:;">下载APP享特价</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DownloadGuide
