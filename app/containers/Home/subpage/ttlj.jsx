import React from 'react'

import { get } from '../../../fetch/get'
import SaleItem from '../../../components/SaleItem'
import './style.less'

class TTLJ extends React.Component{
  constructor(props, context){
    super(props, context)
    this.state = {
      list: []
    }
  }
  render() {
    return(
      <div className="ttlj">
        <div>
          <div className="border"></div>
          <div className="index_sale_wrap">
            <a className="index_title daily_title">
              <span className="title_left">天天立减</span>
              <span className="more">更多优惠</span>
              <i className="arrow-right"></i>
            </a>
            <div className="index_content">
              {this.state.list.map((item, idx) => {
                return <SaleItem type="ttlj" data={item} key={item.dgId}/>
              })}
            </div>
          </div>
        </div>
      </div>
    )
  }
  componentDidMount() {
    let result = get('/api/ttlj')
    result.then(res => {
      return res.json()
    }).then(res => {
      if (res.dayHuiVos && res.dayHuiVos.length) {
        let list = this.state.list
        list = list.concat(res.dayHuiVos)
        this.setState({
          list: list
        })
      }
    })
  }
}

export default TTLJ
