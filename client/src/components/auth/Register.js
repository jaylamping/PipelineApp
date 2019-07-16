import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { register } from '../../actions/authActions';
import { clearErrors } from '../../actions/errorActions';
import PropTypes from 'prop-types';
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  NavLink,
  Alert
} from 'reactstrap';

class Register extends Component {
  
  state = {
    modal: false,
    name: '',
    email: '',
    password: '',
    msg: null
  };

  static propTypes = {
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired,
    clearErrors: PropTypes.func.isRequired,
    register: PropTypes.func.isRequired
  };

  componentDidUpdate(prevProps) {
    const { error, isAuthenticated } = this.props;
    if(error !== prevProps.error) {
      // check for register error
      if(error.id === 'REGISTER_FAIL') {
        this.setState({ msg: error.msg.msg });
      } else {
        this.setState({ msg: null });
      }
    };
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const { name, email, password } = this.state;
    // create user object
    const newUser = {
      name,
      email,
      password
    };
    // attempt to register new user
    this.props.register(newUser);
  };

  render() {
    // redirect to dashboard if authenticated
    if(this.props.isAuthenticated) {
      return <Redirect to='/dashboard' />
    };
    return(
      <Container className='register-view'>
        <h3 className='register-head' align='center'>Register</h3>
        { this.state.msg ? <Alert color='danger'>{ this.state.msg }</Alert> : null }
        <Form onSubmit={ this.onSubmit }>
          <FormGroup>
            <Label for='name'>Name:</Label>
            <Input
              type='text'
              name='name'
              id='name'
              placeholder='Name'
              onChange={ this.onChange }
              className='input-field'
            />
            <Label for='email'>Email:</Label>
            <Input
              type='email'
              name='email'
              id='email'
              placeholder='Email'
              onChange={ this.onChange }
              className='input-field'
            ></Input>
            <Label for='password'>Password:</Label>
            <Input
              type='password'
              name='password'
              id='password'
              placeholder='Password'
              onChange={ this.onChange }
              className='input-field'
            />
            <Label for='password2'>Confirm Password:</Label>
            <Input
              type='password2'
              name='password2'
              id='password2'
              placeholder='Confirm Password'
              onChange={ this.onChange }
              className='input-field'
            />
            <Button 
              color='dark'
              style={{ marginTop: '2rem' }} block  
            >Register</Button>
          </FormGroup>
        </Form>
      </Container>
    );
  }
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error
});

export default connect(
  mapStateToProps, 
  { register, clearErrors }
)(Register);