import React from 'react'

import DetailHeader from '../../components/DetailHeader'
import GroupInfo from '../../components/GroupInfo'
import NearbyShop from '../../components/NearbyShop'
import GroupDetail from '../../components/GroupDetail'

class Detail extends React.Component{
  constructor(props, context) {
    super(props, context)
  }
  render() {
    const options = {
      // auto: 1400,
      continuous: false,
      callback: function(index){
        this.setState({index: index})
      }.bind(this)
    }
    return (
      <div>
        <DetailHeader/>
        <GroupInfo/>
        <div style={{height: '10px'}}></div>
        <NearbyShop/>
        <GroupDetail/>
      </div>
    )
  }
}

export default Detail
