import React from 'react'

import Input from '../../components/Input'
import List from '../../components/List'

import { get } from '../../fetch/get.js'
import { post } from '../../fetch/post.js'

class Todo extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      todos: []
    }
  }
  render() {
    return (
      <div>
        <Input submitFn={this
          .submitFn
          .bind(this)}/>
        <List
          todos={this.state.todos}
          deleteTodoFn={this
          .deleteTodoFn
          .bind(this)}/>
      </div>
    )
  }
  submitFn(value) {
    const id = this.state.todos.length
    this.setState({
      todos: this
        .state
        .todos
        .concat({id: id, text: value})
    })

    let toString = Object.prototype.toString
    console.log(toString.call(this.state.todos))
    console.log(this.state.todos)

    let result = get('/api/2')
    result.then(res => {
      return res.text()
    }).then(text => {
      console.log(text)
    })

  }
  deleteTodoFn(id) {
    let todos = this.state.todos
    this.setState({
      todos: todos.filter(item => {
        if (item.id !== id) {
          return item
        }
      })
    })
  }
}

export default Todo