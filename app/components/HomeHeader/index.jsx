import React from 'react'
import { Link } from 'react-router'

import SearchInput from '../SearchInput'
import './style.less'

class HomeHeader extends React.Component {
  render() {
    return (
      <div className="header"> 
        <div className="index-head">
          <Link to="/city">
            <div className="city"> 
              <span>{this.props.cityName}</span><i className="icon-angle-down"></i>
            </div>
          </Link>
          <div className="user">
            <i className="icon-user"></i>
          </div>
          <SearchInput value="nihao" enterHandle={this.enterHandle.bind(this)}/>
        </div>
      </div>
    )
  }
  enterHandle(value) {
    console.log(value)
  }
}

export default HomeHeader