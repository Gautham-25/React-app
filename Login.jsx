import React, { Component, useState } from 'react';

function Login(){
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [LoggedIn, setLoggedIn] = useState(false)

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };
    
    const handleLogin = (event) => {
        event.preventDefault();

        if (username === 'admin' && password === 'password'){
            setLoggedIn(true);
        } else{
            setLoggedIn(false);

        }
        setUsername('');
        setPassword('');
    };

    return(
        <div id='a'>
            <h1>Login</h1>
            <form onSubmit={(handleLogin)}>
            <label>
            Username:
            <input type='text' value={username} onChange={handleUsernameChange}/>
            </label>
            <br/>
            <label>
            Password:
            <input type='text' value={password} onChange={handlePasswordChange}/>
            </label>
            <br/>
            <button type='submit'>Login</button>
            {LoggedIn ? <h2>Welcome, {username}!</h2> : <p>Invalid Username!<br/>Please try again</p>}
            </form>
            
        </div>
    )

}

export default Login