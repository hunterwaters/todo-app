import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {
  getStyle = () => {
    return {
      background: '#f4f4f4',
      padding: '0px',
      borderBottom: '2px #ccc dotted',
      margin: '0 auto',
      width: '620px',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    }
  }

  render() {
    const { id, title, summary, date } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p className = "list">
          <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} /> {' '}
         Title:   { title } 
         <br/>
             Summary:    {summary}
             <br />
               Date:   {date}
          <button className = "delete" onClick={this.props.delTodo.bind(this, id)}>Delete</button>
        </p>
      </div>
    )
  }
}

// PropTypes
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
}



export default TodoItem