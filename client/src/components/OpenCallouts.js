import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getCallouts, deleteCallout } from '../actions/calloutActions';
import PropTypes from 'prop-types';

class OpenCallouts extends Component {

  static propTypes = {
    getCallouts: PropTypes.func.isRequired,
    callout: PropTypes.object.isRequired
  };

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
            {callouts.map(({ _id, compressor, area, explanation, operator }) => (
              <CSSTransition key={_id} timeout={500} classNames='fade'>
                <ListGroupItem>
                  { compressor } | <span/>
                  { area } | <span/>
                  { explanation } | <span/>
                  { operator } | <span/>
                  { _id }
                  <Button
                    className='remove-btn'
                    color='danger'
                    size='sm'
                    onClick={this.onDeleteClick.bind(this, _id)}
                  >&times;</Button>
                </ListGroupItem>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup>
      </Container>
    )
  };
};

const mapStateToProps = state => ({
  callout: state.callout
});

export default connect(
  mapStateToProps, 
  { getCallouts, deleteCallout }
)(OpenCallouts);