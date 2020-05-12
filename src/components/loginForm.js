import React, { Component} from 'react'
import ReactDOM from 'react-dom'


 export default class Login extends Component {


  constructor() {
    super()
    this.state = {
      email: "",
      password: ""
    }
  }
    handleChange = event => {
      this.setState({
        [event.target.name]:event.target.value
      })
    }
    handleSubmit = event => {
      event.preventDefault();

    
      console.log("Email:" + this.state.email)
      console.log("Password:" + this.state.password)

      const data = {email: this.state.email, password: this.state.password}
      
      
      fetch( 'http://localhost:7000/api/login', {
        method: 'POST',
        body:JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        }
      })
      
        .then(res => {
          console.log(res) 
          return res.json ()})
         //.then(data => {
          // if(data.login) {
             //this.props.history.push("/todolist")
           //}
         //})
        .catch(error => console.log('Error:', error))
        .then(response => console.log('Success', response));}
  
  render() {
    return (
    <main role="main">
      <header>
        <h1>Login</h1>
      </header>
      <form onSubmit = {this.handleSubmit} className = 'login-form'>
          <div>
            <label htmlFor="email" required ="" className = "email">Email</label>
            <br />
            <input placeholder="Email" type = "text" name = "email" className = "email"
            onChange = {this.handleChange}  />
            </div>
            <div>
              <label htmlFor = "password" required ="" className = "email">Password</label>
              <input placeholder = "Password" type = "text" name = "password" className = "password"
              onChange = {this.handleChange}  />
              </div>
              <button type = "submit">Login</button>
              </form>
    <footer role = "content-info">Stay on Track!</footer>
    </main>
        )
    }
  }

