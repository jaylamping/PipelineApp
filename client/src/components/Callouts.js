import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import CalloutModal from './CalloutModal';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getCallouts, deleteCallout, selectCallout } from '../actions/calloutActions';
import PropTypes from 'prop-types';



class Callouts extends Component {

  static propTypes = {
    getCallouts: PropTypes.func.isRequired,
    callout: PropTypes.object.isRequired
  };

  componentDidMount() {
    this.props.getCallouts();
  };

  onSelectClick = id => {
    this.props.selectCallout(id);
  };

  // onDeleteClick = id => {
  //   this.props.deleteCallout(id);
  // };

  render() {

    const { callouts } = this.props.callout; 

    const columns = [{
      dataField: '_id',
      text: 'Callout ID'
    }, {
      dataField: 'compressor',
      text: 'Compressor'
    }, {
      dataField: 'area',
      text: 'Area'
    }, {
      dataField: 'explanation',
      text: 'Explanation'
    }, {
      dataField: 'operator',
      text: 'Operator'
    }, {
      dataField: 'date',
      text: 'Date'
    }];

    const selectRow = {
      mode: 'checkbox',
      clickToSelect: true,
      hideSelectAll: true,
      onSelect: (row) => {
        this.onSelectClick(row._id);
      }
    };

    return(
      <Container>
        {/* <ListGroup>
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
        </ListGroup> */}
        <Button
          color='danger'
          style={{ marginLeft: '.45rem', marginBottom: '1rem', float: 'right'}}
        >Delete Callouts</Button>
        <CalloutModal/>
        <BootstrapTable 
          keyField='_id' 
          data={ callouts } 
          columns={ columns }
          selectRow={ selectRow }
          />
      </Container>
    )
  };
};

const mapStateToProps = state => ({
  callout: state.callout
});

export default connect(
  mapStateToProps, 
  { getCallouts, deleteCallout, selectCallout }
)(Callouts);