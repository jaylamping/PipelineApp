import React, { Component } from 'react';
import { connect } from 'react-redux';

class Landing extends Component {
  
  render() {
    return(
      <div>
        hello
      </div>
    )
  };

};

const mapStateToProps = state => ({

});

export default connect(
  mapStateToProps,
  null
)(Landing);
