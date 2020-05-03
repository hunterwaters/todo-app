import React from 'react';



function SignupForm() {
    return (
        <div>
            <form className = 'signup-form'>
                <div>
                    <label htmlFor = "email" className = "email">Email</label>
                    <br />
                    <input placeholder = "Email" type = "text" name = "email" className = "email" />
                </div>
                <div>
                    <label htmlFor = "password" className  = "password" >Password</label>
                    <br />
                    <input placeholder = "Password" type = "text" name = "password" className = "password"/>
                </div>
                <button type = "submit">Register</button>
            </form>
        </div>
    )
}


export default SignupForm