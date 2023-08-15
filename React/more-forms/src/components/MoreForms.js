import React, { useState } from  'react';
import '../App.css'

const UserForm = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [confirmPassword, setConfirmPassword] = useState("");  

    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");

    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        if(e.target.value.length < 1){
            setFirstNameError("First Name is Required!");
        } else if(e.target.value.length < 3){
            setFirstNameError("First Name must be at least 2 characters!");
        } else {
            setFirstNameError("");
        }
    }

    const handleLastName = (e) => {
        setLastName(e.target.value);
        if(e.target.value.length < 1){
            setLastNameError("Last Name is Required!");
        } else if(e.target.value.length < 3){
            setLastNameError("Last Name must be at least 2 characters!");
        } else {
            setLastNameError("");
        }
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 1){
            setEmailError("Email is Required!");
        } else if(!e.target.value.includes("@")){
            setEmailError("Email Structure is False");
        } else {
            setEmailError("");
        }
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 1){
            setPasswordError("Password is Required!");
        } else if(e.target.value.length < 8){
            setPasswordError("Password must be at least 8 characters!");
        } else {
            setPasswordError("");
        }
    }
    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
        if(e.target.value.length < 1){
            setConfirmPasswordError("Confirm Password is Required!");
        } else if(e.target.value != password){
            setConfirmPasswordError("Confirm Password must be the same as password!");
        } else {
            setConfirmPasswordError("");
        }
    }

    
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
                <input type="text" value={firstName} onChange={ handleFirstName } />
                {
                    firstNameError  ?
                    <p className='errors'>{firstNameError}</p> :
                    ''
                }
                
            </div>
            <div>
                <label>Last Name: </label> 
                <input type="text" value={lastName} onChange={ handleLastName } />
            </div>
            {
                    lastNameError  ?
                    <p className='errors'>{lastNameError}</p> :
                    ''
                }
            <div>
                <label>Email Address: </label> 
                <input type="text" value={email} onChange={ handleEmail } />
            </div>
            {
                    emailError  ?
                    <p className='errors'>{emailError}</p> :
                    ''
                }
             <div>
                <label>Password: </label>
                <input type="text" value={password} onChange={ handlePassword } />
            </div>
            {
                    passwordError  ?
                    <p className='errors'>{passwordError}</p> :
                    ''
                }
             <div>
                <label>Confirm Password: </label>
                <input type="text" value={confirmPassword} onChange={ handleConfirmPassword } />
            </div>
            {
                    confirmPasswordError  ?
                    <p className='errors'>{confirmPasswordError}</p> :
                    ''
                }
            {
            firstNameError || lastNameError || emailError || passwordError || confirmPasswordError ?
            <input type="submit" value="Create User" disabled /> :
            <input type="submit" value="Create User" />
            }

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
