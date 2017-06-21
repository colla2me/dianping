import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import * as userinfoActions from '../actions/userinfo'
import localStore from '../util/localStore'

class App extends React.Component {
  constructor(props, context) {
    super(props, context)
  }
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
  componentDidMount() {
    let cityName = localStore.getItem('city')
    console.log('App component did mount, current city is', cityName)
    if (cityName == null) {
      cityName = '广州'
      localStore.setItem('city', cityName)
    }
    this
      .props
      .userinfoActions
      .update({cityName: cityName})
  }
}

function mapStateToProps(state) {
  return {}
}

function mapDispatchToProps(dispatch) {
  return {
    userinfoActions: bindActionCreators(userinfoActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
