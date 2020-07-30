import React, { Component } from 'react'
import TodoItem from './TodoItem'

export class Todo extends Component {

    render() {
        return this.props.todos.map((todo) => (
            <TodoItem todo={todo} ></TodoItem>
        ));
    }
}

export default Todo
