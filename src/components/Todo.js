import React, { Component } from 'react'
import TodoItem from './TodoItem'
import PropTypes from 'prop-types'

export class Todo extends Component {

    render() {
        return this.props.todos.map(todo => (
            <TodoItem key={todo.id} todo={todo} delTodo={this.props.delTodo} markComplete={this.props.markComplete}></TodoItem>
        ));
    }
}

Todo.propTypes = {
    todos: PropTypes.array.isRequired 
}

export default Todo
