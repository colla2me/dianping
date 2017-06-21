import React from 'react'

import CityHeader from '../../components/CityHeader'
import CityList from '../../components/CityList'

class City extends React.Component{
  constructor(props, context) {
    super(props, context)
  }
  render() {
    return (
      <div>
        <CityHeader/>
        <div className="hot-city">
          <CityList title="热门城市"/>
          <CityList title="更多城市" className="letter-list"/>
          <CityList title="A"/>
          <CityList title="B"/>
          <CityList title="C"/>
        </div>
      </div>
    )
  }
}

export default City
