import React from 'react' ;


function TodoList() {
        return (
            <div>
                <h1>Todo List</h1>
                 <div class = "container">
        <table>
  <tr>
    <th>ToDo Title</th>
    <th>ToDo Summary</th>
    <th>Date</th>
    <th>Delete a ToDo</th>
  </tr>
  <tr>
    <td>Take out Trash</td>
    <td>This is example number 1</td>
    <td>01/22/2020</td><button type = "submit" className = "delete">Delete -</button>
  </tr>
  <tr>
    <td>Take out Trash</td>
    <td>This is example number 2</td>
    <td>01/22/2020</td>
    <button type = "submit" className = "delete">Delete -</button>
  </tr>
  <tr>
    <td>Take out Trash</td>
    <td>This is example number 3</td>
    <td>01/22/2020</td>
    <button type = "submit" className = "delete">Delete -</button>
  </tr>
  <tr>
    <td>Take out Trash</td>
    <td>This is example number 4</td>
    <td>01/22/2020</td>
    <button type = "submit" className = "delete">Delete -</button>
  </tr>
  <tr>
    <td>Take out Trash</td>
    <td>This is example number 5</td>
    <td>01/22/2020</td>
    <button type = "submit" className = "delete">Delete -</button>
  </tr>
  <tr>
    <td>Take out Trash</td>
    <td>This is example number 6</td>
    <td>01/22/2020</td>
    <button type = "submit" className = "delete">Delete -</button>
  </tr>
</table>
        </div>
        <button type = "submit">Logout</button>
        <button type = "submit">Sync to Calendar</button>
    <footer role = "content-info">Footer</footer>
    </div>
        );
    }


export default TodoList;