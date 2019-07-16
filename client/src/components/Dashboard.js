import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container } from 'reactstrap';
import OpenCallouts from './OpenCallouts';
import CalloutModal from './CalloutModal';

class Dashboard extends Component {
  
  render() {
    return(
      <Container>
        <CalloutModal />
        <OpenCallouts />
      </Container>
    )
  };

};

const mapStateToProps = state => ({

});

export default connect(
  mapStateToProps,
  null
)(Dashboard);
