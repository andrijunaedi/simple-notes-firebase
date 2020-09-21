import React, { Component } from 'react';
import { connect } from 'react-redux';

class Login extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="login">
        <p>Login Page</p>
        <button type="submit">Go to Register</button>
        <button type="submit">Go to Dashboard</button>
      </div>
    );
  }
}

const reduxState = (state) => ({
  popup: state.popup,
});

export default connect(reduxState)(Login);
