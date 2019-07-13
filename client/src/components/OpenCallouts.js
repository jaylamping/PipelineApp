import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getCallouts, deleteCallout, addCallout } from '../actions/calloutActions';
import PropTypes from 'prop-types';

class OpenCallouts extends Component {

  componentDidMount() {
    this.props.getCallouts();
  };

  onDeleteClick = id => {
    this.props.deleteCallout(id);
  };

  render() {
    const { callouts } = this.props.callout; 
    return(
      <Container>
        <ListGroup>
          <TransitionGroup className='open-callout-list'>
            {callouts.map(({ id, compressor, operator }) => (
              <CSSTransition key={id} timeout={500} classNames='fade'>
                <ListGroupItem>
                  { compressor } | <span/>
                  { operator } | <span/>
                  { id }
                  <Button
                    className='remove-btn'
                    color='danger'
                    size='sm'
                    onClick={this.onDeleteClick.bind(this, id)}
                  >&times;</Button>
                </ListGroupItem>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup>
      </Container>
    )
  }
};

OpenCallouts.propTypes = {
  getCallouts: PropTypes.func.isRequired,
  callout: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  callout: state.callout
});

export default connect(
  mapStateToProps, 
  { getCallouts, deleteCallout, addCallout }
)(OpenCallouts);