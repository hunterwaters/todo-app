import React from 'react';


function SignupForm() {
    return (
        <div>
            <form className = 'signup-form'>
            <div>
                    <label htmlFor = "firstName" className = "firstName">First Name</label>
                    <br />
                    <input placeHolder = "First Name" type = "text" name = "firstName" className = "firstName" />
                </div>
                <div>
                    <label htmlFor = "lastName" className = "lastName">LastName</label>
                    <br />
                    <input placeHolder = "Last Name" type = "text" name = "lastName" className = "lastName" />
                </div>
                <div>
                    <label htmlFor = "email" className = "email">Email</label>
                    <br />
                    <input placeHolder = "Email" type = "text" name = "email" className = "email" />
                </div>
                <div>
                    <label htmlFor = "password" className  = "password" >Password</label>
                    <br />
                    <input placeholder = "Password" type = "text" name = "password" className = "password"/>
                </div>
                <button type = "submit">Register</button>
            </form>
        </div>
    );
}


export default SignupForm