// LoginPage.tsx
import React, { useState } from 'react';

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const simulateApiCall = (callback: (success: boolean) => void) => {
    const randomInterval = Math.floor(Math.random() * 500) + 100; // between 100 and 600 milliseconds

    console.log(`Simulated delay: ${randomInterval}ms`);

    setErrorMessage(`Logging in.. (${randomInterval}ms)`);

    setTimeout(() => {
      // Simulate an API call with a hardcoded user
      const validUser = { username: 'MAINT', password: 'safetyiskey' };

      if (username === validUser.username && password === validUser.password) {
        // Simulated successful login
        callback(true);
      } else {
        // Simulated failed login
        callback(false);
      }
    }, randomInterval);
  };

  const handleLogin = () => {
    simulateApiCall((success) => {
      if (success) {
        // Successful login
        setErrorMessage('Login successful!');
      } else {
        // Failed login
        setErrorMessage('Invalid username or password');
      }
    });
  };

  return (
    <div id="backgroundImageContainer">
      <div id="loginFormContainer">
        <div id="logoContainer"></div>
        <form>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button id="loginButton" type="button" onClick={handleLogin}>
            Login
          </button>
        </form>
        <div id="errorMesageText"><p>{errorMessage}</p></div>
      </div>
      
    </div>
  );
};

export default LoginPage;
