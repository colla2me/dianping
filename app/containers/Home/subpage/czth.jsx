import React from 'react'

import { get } from '../../../fetch/get'
import SaleItem from '../../../components/SaleItem'
import './style.less'

class CZTH extends React.Component{
  constructor(props, context){
    super(props, context)
    this.state = {
      list: []
    }
  }
  render() {
    return(
      <div className="czth">
        <div className="border"></div>
        <div className="index_sale_wrap">
          <a className="index_title sale_title">
            <span className="title_left">超值特惠</span>
            <span className="more">更多优惠</span>
            <i className="arrow-right"></i>
          </a>
          <div className="index_content">
            {this.state.list.map((item, idx) => {
              return <SaleItem type="czth" data={item} key={item.dgId}/>
            })}
          </div>
        </div>
      </div>
    )
  }
  componentDidMount() {
    let result = get('/api/czth')
    result.then(res => {
      return res.json()
    }).then(res => {
      if (res.preferenceValueHuiVos && res.preferenceValueHuiVos.length) {
        let list = this.state.list
        list = list.concat(res.preferenceValueHuiVos)
        this.setState({
          list: list
        })
      }
    })
  }
}

export default CZTH
