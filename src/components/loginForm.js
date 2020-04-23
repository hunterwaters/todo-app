import React from 'react'

function LoginForm () {
    return (
    <main role="main">
      <header>
        <h1>Login</h1>
      </header>
      <form className = 'login-form'>
          <div>
            <label for="email" required ="" className = "email">Email</label>
            <br />
            <input placeholder="Email" type = "text" name = "email" className = "email"/>
            </div>
            <div>
              <label for = "password" required ="" className = "email">Password</label>
              <input placeholder = "Password" type = "text" name = "password" className = "password"/>
              </div>
              <button type = "submit">Login</button>
              </form>
    <footer role = "content-info">Footer</footer>
    </main>
    )
}

export default LoginForm;