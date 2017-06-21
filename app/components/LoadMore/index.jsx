import React from 'react'

import './style.less'

class LoadMore extends React.Component{
  constructor(props, context) {
    super(props, context)
  }
  render() {
    return (
      <div className="load-more" ref="loadComp">
        {this.props.isLoading ? <span>正在加载中...</span> : <span>加载更多</span>}
      </div>
    )
  }
  componentDidMount() {
    function onscroll() {
      if (this.props.isLoading) return
      if (timer) clearTimeout(timer)
      timer = setTimeout(loadMore.bind(this), 50)
    }
    let timer = null
    const loadComp = this.refs.loadComp
    const windowHeight = window.screen.height
    this.bindScroll = onscroll.bind(this) // 将bind之后的函数保存为方法，以便移除滚动事件监听函数
    window.addEventListener('scroll', this.bindScroll, true)

    function loadMore() {
      const top = loadComp.getBoundingClientRect().top
      if (top < windowHeight) {
        console.log('load more')
        this.props.handler()
      }
    }
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.bindScroll, true)
    console.log('componentWillUnmount')
  }
}

export default LoadMore