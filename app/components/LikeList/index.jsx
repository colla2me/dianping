import React from 'react'
import ListItem from './ListItem'
import './style.less'

class List extends React.Component {
  constructor(props, context) {
    super(props, context)
  }
  render() {
    return (
      <div className="index_like_content">
        {this.props.list.map((item, index) => {
          return <ListItem data={item} key={item.dealgroupid}/>
        })}
      </div>
    )
  }
}

export default List