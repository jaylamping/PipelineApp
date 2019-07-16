import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { connect } from 'react-redux';
import { login } from '../../actions/authActions';
import { clearErrors } from '../../actions/errorActions';
import PropTypes from 'prop-types';
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Alert
} from 'reactstrap';

class Login extends Component {
  
  state = {
    email: '',
    password: '',
    msg: null
  };

  static propTypes = {
    isAuthenticated: PropTypes.bool,
    login: PropTypes.func.isRequired,
    error: PropTypes.object.isRequired,
    clearErrors: PropTypes.func.isRequired
  };

  componentDidUpdate(prevProps) {
    const { error } = this.props;
    if(error !== prevProps.error) {
      // check for login error
      if(error.id === 'LOGIN_FAIL') {
        this.setState({ msg: error.msg.msg });
      } else {
        this.setState({ msg: null });
      };
    };
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const { email, password } = this.state;
    const user = {
      email,
      password
    };
    // attempt to login
    this.props.login(user);
  };

  render() {
    return(
      <Container className='login-view'>
        <h3 className='login-head' align='center'>Login</h3>
        { this.state.msg ? <Alert color='danger'>{ this.state.msg }</Alert> : null }
        <Form onSubmit={ this.onSubmit } className='login-form'>
          <FormGroup>
            <Label for='email'>Email</Label>
            <Input
              type='email'
              name='email'
              id='email'
              placeholder='Email'
              onChange={ this.onChange }
              className='input-field'
            ></Input>
            <Label for='password'>Password</Label>
            <Input
              type='password'
              name='password'
              id='password'
              placeholder='Password'
              onChange={ this.onChange }
              className='input-field'
            />
            <Button 
              color='dark'
              style={{ marginTop: '2rem' }} block
              className='login-btn'  
            >Login</Button>
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
  { login, clearErrors }
)(Login);