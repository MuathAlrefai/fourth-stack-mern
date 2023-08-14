import React, { useState } from  'react';

const UserForm = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [confirmPassword, setConfirmPassword] = useState("");  
    
    const createUser = (e) => {
        // we must prevent the default refresh of the browser to keep our state from being reset
        e.preventDefault();
        // shorthand ES6 syntax for building an object - see notes above
        // const newUser = { firstName, lastName ,email, password, confirmPassword };
    };
    
    return(
        <div className='Center'>
        <form onSubmit={ createUser }>
            <div>
                <label>First Name: </label> 
                <input type="text" value={firstName} onChange={ (e) => setFirstName(e.target.value) } />
            </div>
            <div>
                <label>Last Name: </label> 
                <input type="text" value={lastName} onChange={ (e) => setLastName(e.target.value) } />
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" value={email} onChange={ (e) => setEmail(e.target.value) } />
            </div>
             <div>
                <label>Password: </label>
                <input type="text" value={password} onChange={ (e) => setPassword(e.target.value) } />
            </div>
             <div>
                <label>Confirm Password: </label>
                <input type="text" value={confirmPassword} onChange={ (e) => setConfirmPassword(e.target.value) } />
            </div>
            <input type="submit" value="Create User" />
        </form>

        <p>First Name : {firstName}</p>
        <p>Last Name : {lastName}</p>
        <p>Email : {email}</p>
        <p>Password : {password}</p>
        <p>Confirm : {confirmPassword}</p>
        </div>
    );
};
    
export default UserForm;
