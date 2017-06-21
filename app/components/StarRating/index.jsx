import React from 'react'
import './style.less'

class StarRating extends React.Component{
  constructor(props, context) {
    super(props, context)
  }
  render() {
    return (
      <span className="star-rating" style={{width: this.props.width, height: this.props.height}}>
        <i style={{width: this.props.rating}}></i>
      </span>
    )
  }
}

export default StarRating