import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Login from './auth/Login';
import PropTypes from 'prop-types';

class Landing extends Component {

  static propTypes = {
    isAuthenticated: PropTypes.bool
  };

  render() {
    // redirect to dashboard if authenticated
    if(this.props.isAuthenticated) {
      return <Redirect to='/dashboard' />
    };

    return(
      <section className='landing-view'>
        <Login />
      </section>
    )
  };
};


const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});


export default connect(
  mapStateToProps,
  null
)(Landing);
