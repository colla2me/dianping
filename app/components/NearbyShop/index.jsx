import React from 'react'
import StarRating from '../StarRating'
import './style.less'

class NearbyShop extends React.Component{
  constructor(props, context) {
    super(props, context)
  }
  render() {
    return (
      <div className="nearby-shop">
        <div className="detail-info">
          <div className="hd">适用商户(1)</div>
          <div className="shop-info">
            <aside>
              <h3>空中一号</h3>
              <p>
                <StarRating width="86px" height="16px" rating="86%"/>
                <span className="fr">>100km</span>
              </p>
            </aside>
            <a className="call-link">
              <i className="icon-call"></i>
            </a>
          </div>
          <div className="location">
            <a>
              <i className="icon-location"></i>
              珠江新城华夏路1号信合大厦28-31楼
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default NearbyShop