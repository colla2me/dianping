import React from 'react'

import './style.less'

class SaleItem extends React.Component{
  constructor(props, context){
    super(props, context)
  }

  render() {
    const item = this.props.data
    return (
      <a className="index_sale-item">
        <img src={item.imageUrl}/>
        <div className="title">{item.shortTitle}</div>
        <div className="price">
          <ins className="price_cur">￥{parseFloat(item.price)}</ins>
          {
            this.props.type === 'czth' ? <del className="price_old">￥{item.markPrice}</del> : item.tag && <ins className="price_down">{item.tag}</ins>
          }
        </div>
      </a>
    )
  }
}

export default SaleItem
