import React from 'react';
import TitlePage from './components/titlePage';
import SignupForm from './components/signupForm';
import { Link, BrowserRouter, Route } from 'react-router-dom';
import ToDoList from './components/ToDoList'
//import Header from './components/Header'



class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      firstName: "Hunter",
      lastName: "Waters"
    }
  }
  render () {
  return (
    <BrowserRouter>
    <div className='App'>
      <Link to = "/">
        Home 
      </Link>
      <Link to = "/login">
        Login
      </Link>
      <TitlePage />
      <SignupForm />
      <Route path="/login" render={ (props) => <ToDoList 
                                                        firstName={this.state.firstName}
                                                        lastName={this.state.lastName}/>} />
      </div>
    </BrowserRouter>
  );
}
}

export default App;
