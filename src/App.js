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
            'completed': false
        },
        {
            'id': uuid.v4(),
            'title': 'Be yourself',
            'completed': false
        }
    ]
}

  render() {
    return (
      <div className="App">
      <Todo todos={this.state.todos} ></Todo>
      </div>
    )
  }
}

export default App

