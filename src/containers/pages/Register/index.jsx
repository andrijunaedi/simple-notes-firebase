import React, { Component } from 'react';
import firebase from '../../../config/firebase';

import './Register.scss';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  handleChangeText = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleRegisterSubmit = () => {
    const { email, password } = this.state;
    console.log(this.state);
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((respon) => {
        console.log(respon);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  render() {
    return (
      <div className="auth-container">
        <div className="auth-card">
          <p className="auth-title">Register Page</p>
          <input
            className="input"
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            onChange={this.handleChangeText}
          />
          <input
            className="input"
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            onChange={this.handleChangeText}
          />
          <button
            className="btn"
            type="submit"
            onClick={this.handleRegisterSubmit}
          >
            Register
          </button>
        </div>
        {/* <button type="submit">Go to Dashboard</button> */}
      </div>
    );
  }
}

export default Register;
