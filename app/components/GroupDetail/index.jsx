import React from 'react'
import './style.less'

class GroupDetail extends React.Component{
  constructor(props, context) {
    super(props, context)
  }
  render() {
    return (
      <div className="group-detail">
        <h4 className="tit">团购详情</h4>
        <table width="100%" cellPadding="0" cellSpacing="0" className="detail-table">
          {/*<thead>
            <tr>
              <th width="50%">名称</th>
              <th width="25%">数量</th>
              <th width="25%">单价</th>
            </tr>
          </thead>*/}
          <tbody>
            <tr>
              <th colSpan="3">龙虾海鲜餐（八人用）</th>
            </tr>
            <tr>
              <td>上汤伊面焗美国野生波士顿龙虾</td>
              <td className="tc">1份</td>
              <td className="tc">595元</td>
            </tr>
            <tr>
              <td>野生芫茜炖鱼皇汤</td>
              <td className="tc">1份</td>
              <td className="tc">528元</td>
            </tr>
            <tr>
              <td>二十年陈皮蒜子焖斑腩</td>
              <td className="tc">1份</td>
              <td className="tc">178元</td>
            </tr>
            <tr>
              <td>金不换脆藕炒澳洲和牛粒</td>
              <td className="tc">1份</td>
              <td className="tc">128元</td>
            </tr>
            <tr>
              <td>招牌客家咸香鸡</td>
              <td className="tc">1份</td>
              <td className="tc">96元</td>
            </tr>
            <tr>
              <td>上汤浸时蔬</td>
              <td className="tc">1份</td>
              <td className="tc">60元</td>
            </tr>
            <tr>
              <td>特色叉烧餐包</td>
              <td className="tc">1份</td>
              <td className="tc">88元</td>
            </tr>
            <tr>
              <td>环球水果</td>
              <td className="tc">1份</td>
              <td className="tc">48元</td>
            </tr>
            <tr className="total">
              <td></td>
              <td className="tc">
                最高价值<br/><strong>团购价</strong>
              </td>
              <td className="tc">
                1721元<br/><strong>888元</strong>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default GroupDetail