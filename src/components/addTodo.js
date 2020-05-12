import React, { Component } from 'react'
import ReactDom from 'react-dom'


export default class addtodo extends Component{

  constructor() {
    super() 
    this.state = {
      title: "",
      summary: "",
      date: ""
    }
  }

  handleChange = event => {
    this.setState({
      [event.target.name]:event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();

    console.log("Title:" + this.state.title)
    console.log("Summary:" + this.state.summary)
    console.log("Date:" + this.state.date)
  

    const data = {title: this.state.title, summary: this.state.summary, date: this.state.date}


  
    fetch('http://localhost:7000/api/addtodo', {
      method: 'POST',
      body:JSON.stringify(data),
      headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json'
      }
    })
  
    .then(res => {
      console.log(res)
      return res.json()})
      .catch(error => console.log('Error:', error))
      .then(response => console.log('Success', response));
    }
  render() {

    return (
  
        <main role = "main">
        <h1>Add-Todo</h1>
        <form onSubmit = {this.handleSubmit} className = "todo-Form" >
          <div className="todoTitle">
            <label htmlFor="toDo-title">ToDo title</label>
            <br />
            <input type="text"  className = "title" name="title" placeholder = "Title" required
            onChange = {this.handleChange} />
            </div>
          <div className="form-section">
            <label htmlFor="summary">Summary</label>
            <br />
            <input type = "text" name="summary"  className = "summary"  placeholder = "Summary..."  required onChange = {this.handleChange }/>
          </div>
          <div className="form-section">
            <p className="">Date</p>
            <input type= "date"  className = "date" name = "date" placeholder = "Date" required onChange = {this.handleChange}  />
            <button type="submit">Add +</button>
            </div>
            <footer role = "content-info">Stay on Track!</footer>
        </form>
        </main>
      );
  }
}
