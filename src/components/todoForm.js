import React from 'react'

function TodoForm() {
    return (
        <main role = "main">
        <h1>New ToDo</h1>
        <form className = "todo-Form">
          <div className="todoTitle">
            <label for="toDo-title">ToDo title</label>
            <br />
            <input type="text" name="toDo-title" placeholder = "Title" required/>
            </div>
          <div className="form-section">
            <label for="toDo-summary">Explain ToDo</label>
            <br />
            <textarea name="toDo-summary" rows="2" placeholder = "Summary..."  required></textarea>
          </div>
          <div className="form-section">
            <p className="ToDo-header">Date of ToDo</p>
            <input type="number" className="date" placeholder="03" min="1" max="12" required=""/> .
            <input type="number" name="date-day" className="date"  placeholder="05" min="1" max="31" required=""/> .
            <input type="number" name="date" className="date" placeholder="2020" min="2016" max="2017" required=""/>
            <button type="submit">Add +</button>
            </div>
        </form>
        </main>
    );
}

export default TodoForm