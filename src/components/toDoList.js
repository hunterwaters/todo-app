import React, { Component } from 'react' ;
import axios from 'axios'
import {v4 as uuid} from 'uuid';
import Todos from './Todos';


export default class TodoList extends Component {

  state = {
    todos: []
  };

  componentDidMount() {
    axios
      .get('http://localhost:7000/api/todolist')
      .then(res => this.setState({ todos: res.data }));
  }

  // Toggle Complete
  markComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };

  // Delete Todo
  delTodo = id => {
    axios.delete(`http://localhost:7000/api/todolist/${id}`).then(res =>
      this.setState({
        todos: [...this.state.todos.filter(todo => todo.id !== id)]
      })
    );
  };

  render() {
        return (
          <div>
            <h1> ToDo List</h1>
            <button className = "logout " type = "submit">Logout</button>
    <footer role = "content-info">Stay on Track!</footer>
    <Todos todos = {this.state.todos}
            markComplete = {this.markComplete}
            delTodo = {this.delTodo} />
    </div>
        );
    }
  }
