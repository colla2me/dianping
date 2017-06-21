import React from 'react'

import './style.less'

class CityHeader extends React.Component{
  constructor(props, context) {
    super(props, context)
  }
  render() {
    return (
      <header className="city-head">
        <a className="back" href="javascript:history.go(-1);"></a>
        <div className="title">
          <div className="segment">
            <a href="javascript:;" className="on">国内</a>
            <a href="javascript:;">海外</a>
          </div>
        </div>
      </header>
    )
  }
}

export default CityHeader