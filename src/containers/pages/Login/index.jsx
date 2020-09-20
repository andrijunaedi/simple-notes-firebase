import React, { Component } from 'react';

class Login extends Component {
  render() {
    return (
      <div className="login">
        <p>Login Page</p>
        <button type="submit">Go to Register</button>
        <button type="submit">Go to Dashboard</button>
      </div>
    );
  }
}

export default Login;
