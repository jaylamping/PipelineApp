import React, { Component } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';
import { connect } from 'react-redux';
import { addCallout } from '../actions/calloutActions';
import uuid from 'uuid';

class CalloutModal extends Component {
  state = {
    modal: false,
    compressor: ''
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  onChange = (e) => {
    this.setState({ [e.target.compressor]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const newCallout = {
      id: uuid(),
      compressor: this.state.compressor
    };
    // Add Callout via addCallout action
    this.props.addCallout(newCallout);
    // Close modal
    this.toggle();
  };




  render() {
    return(
      <div>
        <Button
          color='dark'
          style={{ marginBottom: '2rem' }}
          onClick={ this.toggle }
        >Add Callout</Button>

        <Modal
          isOpen={ this.state.modal }
          toggle={ this.toggle }
          centered={ true }
        >
          <ModalHeader toggle={ this.toggle }>Add to Callout List</ModalHeader>
          <ModalBody>
            <Form onSubmit={ this.onSubmit }>
              <FormGroup>
                <Label for='callout'>Callout</Label>
                <Input
                  type='text'
                  compressor='callout-input'
                  id='callout'
                  placeholder='Add Callout record'
                  onChange={ this.onChange }
                ></Input>
                <Button 
                  color='dark'
                  style={{ marginTop: '2rem' }} block  
                >Add Callout</Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }





};

const mapStateToProps = state => ({
  callout: state.callout
});

export default connect(
  mapStateToProps, 
  { addCallout }
)(CalloutModal);