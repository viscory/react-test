import React, { Component } from 'react'
import Todo from './components/Todo'
import './App.css';
import uuid from 'uuid';

export class App extends Component {
  state = {
    'todos':[
        {
            'id': uuid.v4(),
            'title': 'Check yourself',
            'completed': false
        },
        {
            'id': uuid.v4(),
            'title': 'Watch yourself',
            'completed': true
        },
        {
            'id': uuid.v4(),
            'title': 'Be yourself',
            'completed': false
        }
    ]
  }
  
  // Toggle Complete
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo
    }) 
    });
  }

  delTodo = (id) => {
    this.setState({ todos: this.state.todos.filter(todo => {
      if (todo.id !== id) {
        return todo
      }
    })
    });
  }
  render() {
    return (
      <div className="App">
      <Todo todos={this.state.todos} delTodo={this.delTodo} markComplete={this.markComplete}></Todo>
      </div>
    )
  }
}

export default App

