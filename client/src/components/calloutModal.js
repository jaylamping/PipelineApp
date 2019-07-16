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

class CalloutModal extends Component {
  
  state = {
    modal: false,
    compressor: '',
    area: '',
    explanation: '',
    operator: ''
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const newCallout = {
      compressor: this.state.compressor,
      area: this.state.area,
      explanation: this.state.explanation,
      operator: this.state.operator
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
                <Label for='callout'>Enter Callout Information</Label>
                <Input
                  type='text'
                  name='compressor'
                  id='compressor-input'
                  value={ this.state.value }
                  placeholder='Enter Compressor Name'
                  onChange={ this.onChange }
                  required={ true }
                  className='input-field'
                ></Input>
                <Input
                  type='text'
                  name='area'
                  id='area-input'
                  placeholder='Enter Area'
                  onChange={ this.onChange }
                  required={ true }
                  className='input-field'
                ></Input>
                <Input
                  type='text'
                  name='operator'
                  id='operator-input'
                  placeholder='Enter Operator Name'
                  onChange={ this.onChange }
                  required={ true }
                  className='input-field'
                ></Input>
                <Input
                  type='text'
                  name='explanation'
                  id='explanation-input'
                  placeholder='Enter Explanation'
                  onChange={ this.onChange }
                  className='input-field'
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