import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import uuid from 'uuid';

import { connect } from 'react-redux';
import { getCallouts } from '../actions/calloutActions';
import PropTypes from 'prop-types';

class OpenCallouts extends Component {

  componentDidMount() {
    this.props.getCallouts();
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
                    onClick={() => {
                      this.setState(state => ({
                        callouts: state.callouts.filter(click => click.id !== id)
                      }));
                    }}
                  >&times;</Button>
                </ListGroupItem>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup>
        <Button
          color='dark'
          style={{marginBottom: '2rem', marginTop: '2rem'}}
          onClick={() => {
            const compressor = prompt('Enter Callout');
            if (compressor) {
              this.setState(state => ({
                callouts: [...state.callouts, { id: uuid(), compressor}]
              }))
            };
          }}
        >
          Log Callout
        </Button>
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

export default connect(mapStateToProps, { getCallouts })(OpenCallouts);