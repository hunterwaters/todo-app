import React from "react";
import {
  BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import TodoList from './ToDoList'
import TitlePage from './components/titlePage'
import LoginForm from './components/loginForm'
import TodoForm from './components/addTodo';


export default function App() {
  return (
    <Router className = "router">
      <div>
            <Link to="/">Home  ||</Link>
            <Link to="/login">Login  ||</Link>
            <Link to="/addtodo">Add Todo ||</Link>
            <Link to="/todolist"> Todo List </Link>
        <hr />

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

