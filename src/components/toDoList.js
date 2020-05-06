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
      .get('https://jsonplaceholder.typicode.com/todos?_limit=10')
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
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then(res =>
      this.setState({
        todos: [...this.state.todos.filter(todo => todo.id !== id)]
      })
    );
  };

  // Add Todo
  addTodo = title => {
    axios
      .post('https://jsonplaceholder.typicode.com/todos', {
        title,
        completed: false
      })
      .then(res => {
        res.data.id = uuid.v4();
        this.setState({ todos: [...this.state.todos, res.data] });
      });
  };

  render() {
        return (
          <div>
            <h1> ToDo List</h1>
    <footer role = "content-info">Footer</footer>
    <Todos todos = {this.state.todos}
            markComplete = {this.markComplete}
            delTodo = {this.delTodo} />
            <button type = "submit">Logout</button>
        <button type = "submit">Sync to Calendar</button>
    </div>
        );
    }
  }
