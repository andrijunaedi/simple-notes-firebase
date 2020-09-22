import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '../../../components/atoms/Button';

import './Register.scss';
import { registerUserAPI } from '../../../config/redux/action';

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
    const { registerAPI } = this.props;
    registerAPI({ email, password });
  };

  render() {
    const { isLoading } = this.props;
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
          <Button
            onClink={this.handleRegisterSubmit}
            title="Register"
            loading={isLoading}
          />
        </div>
        {/* <button type="submit">Go to Dashboard</button> */}
      </div>
    );
  }
}

const reduxState = (state) => ({
  isLoading: state.isLoading,
});

const reduxDispatch = (dispatch) => ({
  registerAPI: (data) => dispatch(registerUserAPI(data)),
});

export default connect(reduxState, reduxDispatch)(Register);
