import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class TodoItem extends Component {
    getStyle = () => {
        return {
            backgroundColor: this.props.todo.completed ? '#ff5722': '#dd2c00',
            color: '#b2ebf2',
            padding: '10px',
            fontFamily: 'Roboto Condensed',
            // borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }

    render() {
        const { id, title } = this.props.todo;

        return (
            <div style={ this.getStyle() }>
                <input type="checkbox" onChange={this.props.markComplete.bind(this, id)}/> {' '}
                <p>{ title }</p>
                <button style={btnStyle} onClick={this.props.delTodo.bind(this, id)}>x</button>
            </div>
        )
    }
}

TodoItem.propTypes = {
    todo: PropTypes.array.isRequired,
    key: PropTypes.string.isRequired,
    delTodo: PropTypes.func.isRequired,
    markComplete: PropTypes.func.isRequired 
}

const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 10px',
    borderRadius: '50%',
    cursor:'pointer',
    float: 'right'

}
export default TodoItem
