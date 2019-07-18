import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import CalloutModal from './CalloutModal';
import { Container, Button } from 'reactstrap';
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

  onDeleteClick() {
    const { callouts } = this.props.callout;
    const selected = callouts
      .filter(item => item.isSelected)
      .map(item => item._id);
    this.props.deleteCallout(selected);
  };

  render() {

    const { callouts } = this.props.callout; 

    const columns = [{
      dataField: '_id',
      text: 'Callout ID'
    }, {
      dataField: 'compressor',
      text: 'Compressor',
      sort: true
    }, {
      dataField: 'area',
      text: 'Area',
      sort: true
    }, {
      dataField: 'explanation',
      text: 'Explanation',
      sort: true
    }, {
      dataField: 'operator',
      text: 'Operator',
      sort: true
    }, {
      dataField: 'date',
      text: 'Date',
      sort: true
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
        <Button
          color='danger'
          style={{ marginLeft: '.45rem', marginBottom: '1rem', float: 'right'}}
          onClick={ this.onDeleteClick.bind(this) }
          >Delete Callouts
        </Button>
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