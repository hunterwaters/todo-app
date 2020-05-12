import React, { Component } from "react";
import {
  BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import TodoList from './components/toDoList'
import TitlePage from './components/titlePage'
import LoginForm from './components/loginForm'
import TodoForm from './components/addTodo';



class App extends Component {

  render() {

  return (
    <Router className = "router">
      <div className = "navbar">
            <Link to="/"> Home || </Link>
            <Link to="/login">Login ||  </Link>
            <Link to="/addtodo">Add-Todo || </Link>
            <Link to="/todolist"> Todo-List </Link>
        <Switch>
          <Route exact path="/">
            <TitlePage />
          </Route>
          <Route path="/login">
            <LoginForm />
          </Route>
          <Route path="/addtodo">
            <TodoForm />
          </Route>
          <Route path="/todolist">
            <TodoList />
          </Route>
        </Switch>
      </div>
           </Router>
    
  );
}
}

export default App;

