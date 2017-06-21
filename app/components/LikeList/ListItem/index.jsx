import React from 'react'

import { Link } from 'react-router'
import './style.less'

class ListItem extends React.Component {
  constructor(props, context) {
    super(props, context)
  }
  render() {
    const item = this.props.data
    return (
      <Link to={"/detail/" + item.dealgroupid} className="index_like_item" href="javascript:;">
        <div className="pic">
          <img src={item.defaultPic} width="90px" height="90px"/>
        </div>
        <div className="content">
          <h3 className="shop_name">{item.shopName}</h3>
          <p className="shop_name_sub">{item.dealGroupTitle}</p>
          <p className="price">
            <span className="price_related">
              <ins className="price_cur">￥{item.dealgroupPrice}</ins>
              <del className="price_old">￥{item.marketPrice}</del>
            </span>
            <span className="sale_desc">{item.salesdesc}</span>
          </p>
          {item.recreason && <span className="rec_reason">{item.recreason}</span>}
        </div>
      </Link>
    )
  }
}

export default ListItem
