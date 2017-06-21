import React from 'react'

import './style.less'

class SearchInput extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      value: ''
    }
  }
  render() {
    return (
      <div className="searchBox">
        <i className="icon-search"></i>
        <input 
              type="text" 
              placeholder="输入搜索关键字" 
              value={this.state.value}
              onChange={this.changeHandle.bind(this)}
              onKeyUp={this.keyUpHandle.bind(this)}/>
      </div>
    )
  }
  componentDidMount() {
    this.setState({
      value: this.props.value || ''
    })
  }
  changeHandle(e) {
    const value = e.target.value
    this.setState({
      value: value
    })
  }
  keyUpHandle(e) {
    if (e.keyCode !== 13) {
      return
    }
    this.props.enterHandle(this.state.value)
  }
}

export default SearchInput