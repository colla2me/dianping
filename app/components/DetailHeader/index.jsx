import React from 'react'

import './style.less'

class DetailHeader extends React.Component{
  constructor(props, context){
    super(props, context)
  }
  render() {
    return (
      <header className="detail-head">
        <a className="back" href="javascript:history.go(-1);">返回</a>
        <div className="title">团购详情</div>
      </header>
    )
  }
}

export default DetailHeader