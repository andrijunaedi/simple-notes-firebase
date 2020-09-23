import React, { Component } from 'react';
import { connect } from 'react-redux';

import Button from '../../../components/atoms/Button';
import { loginUserAPI } from '../../../config/redux/action';
import '../Register/Register.scss';

class Login extends Component {
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

  handleLoginSubmit = () => {
    const { email, password } = this.state;
    const { loginAPI } = this.props;
    loginAPI({ email, password });
    this.setState({
      email: '',
      password: '',
    });
  };

  render() {
    const { email, password } = this.state;
    const { isLoading } = this.props;
    return (
      <div className="auth-container">
        <div className="auth-card">
          <p className="auth-title">Login Page</p>
          <input
            className="input"
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={this.handleChangeText}
          />
          <input
            className="input"
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={this.handleChangeText}
          />
          <Button
            onClink={this.handleLoginSubmit}
            title="Login"
            loading={isLoading}
          />
        </div>
      </div>
    );
  }
}

const reduxState = (state) => ({
  isLoading: state.isLoading,
});

const reduxDispatch = (dispatch) => ({
  loginAPI: (data) => dispatch(loginUserAPI(data)),
});

export default connect(reduxState, reduxDispatch)(Login);
