import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container } from 'reactstrap';
import { Redirect } from 'react-router-dom';
import OpenCallouts from './OpenCallouts';
import CalloutModal from './CalloutModal';
import PropTypes from 'prop-types';

class Dashboard extends Component {
  
  static propTypes = {
    isAuthenticated: PropTypes.bool
  };

  render() {
    // redirect to landing if not authenticated
    if(!this.props.isAuthenticated) {
      return <Redirect to='/' />
    };

    return(
      <Container>
        <CalloutModal />
        <OpenCallouts />
      </Container>
    )
  };

};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  null
)(Dashboard);
