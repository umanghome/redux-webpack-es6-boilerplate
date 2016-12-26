import React, {Component} from 'react';
import {Link} from 'react-router';
import mapStateToProps from '../mapStateToProps';
import mapDispatchToProps from '../mapDispatchToProps';
import {connect} from 'react-redux';

class Home extends Component {
  constructor (props) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  logout (e) {
    e.preventDefault();
    localStorage.removeItem('token');
    this.forceUpdate();
  }

  render () {
    const authenticated = localStorage.getItem('token') ? true : false;
    if (!authenticated) {
      return (
        <div>
          You need to be logged in to be able to view this page. <Link to={'/login'}>Login</Link>
        </div>
      );
    }
    return (
      <div>
        Hello, world! <a href="#" onClick={this.logout}>Logout</a>
      </div>
    );
  }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Home);