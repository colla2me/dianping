import React from 'react'

import { get } from '../../../fetch/get'
import ListView from '../../../components/LikeList'
import LoadMore from '../../../components/LoadMore'

class CNXH extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      listData: {},
      hasMore: false,
      isLoading: false,
      nextPage: 1
    }
  }
  render() {
    return (
      <div className="cnxh">
        <div className="border"></div>
        <div className="index_like_wrap">
          <div className="index_like_title">猜你喜欢</div>
          {Object.keys(this.state.listData).map((val, idx) => {
            return <ListView list={this.state.listData[val]} key={val}/>
          })}
        </div>
        {this.state.hasMore && <LoadMore isLoading={this.state.isLoading} handler={this.loadMoreData.bind(this)}/>}
      </div>
    )
  }
  componentDidMount() {
    this.loadMoreData()
  }
  loadMoreData() {
    this.setState({
      isLoading: true
    })
    let result = get('/api/cnxh/'+this.state.nextPage)
    result.then(res => {
      return res.json()
    }).then(res => {
      if (res.list && res.list.length) {
        let listData = this.state.listData
        let hasMore = res.startNum <= res.totalNum
        listData[res.startNum] = res.list
        this.setState({
          listData: listData,
          hasMore: hasMore,
          isLoading: false,
          nextPage: this.state.nextPage + 1
        })
      }
    })
  }
}

export default CNXH
