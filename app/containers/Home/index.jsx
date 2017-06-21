import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Header from '../../components/HomeHeader'
import DownloadGuide from '../../components/DownloadGuide'
import Category from '../../components/HomeCategory'
import SaleDiscount from './subpage/czth'
import DailyDiscount from './subpage/ttlj'
import GuessYouLike from './subpage/cnxh'

class Home extends React.Component{
  constructor(props, context) {
    super(props, context)
  }
  render() {
    return (
      <div>
        <Header cityName={this.props.userinfo.cityName}/>
        <DownloadGuide/>
        <Category/>
        <SaleDiscount/>
        <DailyDiscount/>
        <GuessYouLike/>
      </div>
    )
  }
  componentDidMount() {
    console.log('HomeHeader component did mount')
  }
}


function mapStateToProps(state) {
  return {
    userinfo: state.userinfo
  }
}

function mapDispatchToProps(dispatch){
  return {}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)

