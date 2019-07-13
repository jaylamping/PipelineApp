import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import uuid from 'uuid';

class OpenCallouts extends Component {
  state = {
    callouts: [
      { id: uuid(), compressor: 'Rupe', operator: 'Zak Goerke' },
      { id: uuid(), compressor: 'Zenith', operator: 'Joey Lamping' },
      { id: uuid(), compressor: 'Kirkman', operator: 'Travis Seipel' },
      { id: uuid(), compressor: 'Brehm', operator: 'Collin Ayer' }
    ]
  }

  render() {
    const { callouts } = this.state;
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

export default OpenCallouts;