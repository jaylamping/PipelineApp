import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
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
      <section className='landing'>
        <div className='overlay'>
          <div className='landing-inner'>
            <h1 className='x-large'>Pipeline App</h1>
          </div>
        </div>
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
