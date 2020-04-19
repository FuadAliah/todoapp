import React, { Component } from 'react'
import AddItem from './components/AddItem/AddItem'
import TodoItems from './components/TodoItems/TodoItems'

class App extends Component {
  state = {
    msg: "state",
    items: [
      { id: 1, task: 'Home Page Design', type: 'Design' },
      { id: 2, task: 'Design Slicing', type: 'front-end' },
      { id: 3, task: 'Requiremnet', type: 'BA' },
      { id: 4, task: 'Home Page Design', type: 'Design' },
      { id: 5, task: 'Design Slicing', type: 'front-end' },
      { id: 6, task: 'Requiremnet', type: 'BA' },
      { id: 7, task: 'Home Page Design', type: 'Design' },
      { id: 8, task: 'Design Slicing', type: 'front-end' },
      { id: 9, task: 'Requiremnet', type: 'BA' }
    ]
  }

  deleteItem = (id) => {
    let items = this.state.items.filter(item => {
      return item.id !== id;
    })
    this.setState({ items })
  }

  addItem = (item) => {
    item.id = this.state.items.length + 1
    let items = this.state.items;
    items.push(item)
    this.setState({ items })
  }

  render() {
    return (
      <div className="app">
        <div className="container">
          <TodoItems items={this.state.items} deleteItem={this.deleteItem} />
          <AddItem addItem={this.addItem} />
        </div>
      </div>
    )
  }
}

export default App;