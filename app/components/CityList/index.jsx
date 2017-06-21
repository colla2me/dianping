import React from 'react'

import './style.less'

class CityList extends React.Component {
  constructor(props, context) {
    super(props, context)
  }
  render() {
    return (
      <div className="home-place">
        <h4 className="hd">{this.props.title}</h4>
        {this.props.className ? <ul className={this.props.className}>
            
            <li><a href="#A">A</a></li>
            
            <li><a href="#B">B</a></li>
            
            <li><a href="#C">C</a></li>
            
            <li><a href="#D">D</a></li>
            
            <li><a href="#E">E</a></li>
            
            <li><a href="#F">F</a></li>
            
            <li><a href="#G">G</a></li>
            
            <li><a href="#H">H</a></li>
            
            <li><a href="#I">I</a></li>
            
            <li><a href="#J">J</a></li>
            
            <li><a href="#K">K</a></li>
            
            <li><a href="#L">L</a></li>
            
            <li><a href="#M">M</a></li>
            
            <li><a href="#N">N</a></li>
            
            <li><a href="#P">P</a></li>
            
            <li><a href="#Q">Q</a></li>
            
            <li><a href="#R">R</a></li>
            
            <li><a href="#S">S</a></li>
            
            <li><a href="#T">T</a></li>
            
            <li><a href="#W">W</a></li>
            
            <li><a href="#X">X</a></li>
            
            <li><a href="#Y">Y</a></li>
            
            <li><a href="#Z">Z</a></li>
            
        </ul> : <ul className="city-list">
          <li>
            <a href="/beijing" data-id="2">北京</a>
          </li>
          <li>
            <a href="/chengdu" data-id="8">成都</a>
          </li>
          <li>
            <a href="/chongqing" data-id="9">重庆</a>
          </li>
          <li>
            <a href="/guangzhou" data-id="4">广州</a>
          </li>
          <li>
            <a href="/hangzhou" data-id="3">杭州</a>
          </li>
          <li>
            <a href="/nanjing" data-id="5">南京</a>
          </li>
          <li>
            <a href="/shanghai" data-id="1">上海</a>
          </li>
          <li>
            <a href="/shenzhen" data-id="7">深圳</a>
          </li>
          <li>
            <a href="/suzhou" data-id="6">苏州</a>
          </li>
          <li>
            <a href="/tianjin" data-id="10">天津</a>
          </li>
          <li>
            <a href="/wuhan" data-id="16">武汉</a>
          </li>
          <li>
            <a href="/xian" data-id="17">西安</a>
          </li>
        </ul>}
      </div>
    )
  }
}

export default CityList