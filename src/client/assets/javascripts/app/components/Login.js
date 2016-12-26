import React, {Component} from 'react';
import {connect} from 'react-redux';
import mapStateToProps from '../mapStateToProps';
import mapDispatchToProps from '../mapDispatchToProps';
import {push} from 'react-router-redux';

class Login extends Component {
  constructor (props) {
    super(props);
    console.log(props);
    if (localStorage.getItem('token')) props.history.push('/');

    this.state = {
      errorStr: '',
      submitDisabled: false
    };

    this.loginHandler = this.loginHandler.bind(this);
  }

  loginHandler (e) {
    e.preventDefault();
    if (this.props.username.length <= 0) {
      this.setState({
        errorStr: 'Please enter a username'
      });
      return;
    }

    if (this.props.password.length <= 0) {
      this.setState({
        errorStr: 'Please enter a password'
      });
      return;
    }

    if (this.props.username !== this.props.password) {
      this.setState({
        errorStr: 'username/password combo invalid'
      });
      return;
    }

    this.setState({
      errorStr: '',
      submitDisabled: true
    });

    this.props.setToken('randomtoken');
    this.props.history.push('/');
  }

  render () {
    return (
      <div>
        <form onSubmit={this.loginHandler} action="#">
          <input type="text" value={this.props.username} placeholder="username"
            onChange={(e) => {this.props.setUsername(e.target.value)}} />
          <input type="password" value={this.props.password} placeholder="password"
            onChange={(e) => {this.props.setPassword(e.target.value)}}/>
          <button type="submit" disabled={this.state.submitDisabled}>Login</button>
        </form>
        <div style={{color: 'red'}}>
          {this.state.errorStr}
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(Login);