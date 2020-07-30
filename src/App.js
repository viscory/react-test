import React, { Component } from 'react'
import Todo from './components/Todo'
import AddTodo from './components/AddTodo'
import './App.css';
import uuid from 'uuid';
import axis from 'axios';
import Header from './components/layout/Header';

export class App extends Component {
  state = {
    todos:[
        {
            id: uuid.v4(),
            title: 'Check yourself',
            completed: false
        },
        {
            id: uuid.v4(),
            title: 'Watch yourself',
            completed: true
        },
        {
            id: uuid.v4(),
            title: 'Be yourself',
            completed: false
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

  // Deleted Todo
  delTodo = (id) => {
    this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)] });  
  }

  // Add TodoItem
  addTodo = (title) => {
    const newTodo = {
      'id': uuid.v4(),
      title,
      completed: false
    }
    this.setState({todos: [...this.state.todos, newTodo]});
  }
  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo addTodo={this.addTodo}/>
          <Todo todos={this.state.todos} delTodo={this.delTodo} markComplete={this.markComplete}></Todo>
        </div>
      </div>
    )
  }
}

export default App

