import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Logout from './auth/Logout';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Collapse,
  Container,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from 'reactstrap';

class NavBar extends Component {

  state = {
      isOpen: false
  };

  static propTypes = {
    auth: PropTypes.object.isRequired
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {

    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <Fragment>
        <NavItem>
          <span className='navbar-text mr-3'>
            <strong>{ user ? `Welcome ${user.name}` : '' }</strong>
          </span>
        </NavItem>
        <NavItem>
          <Logout />
        </NavItem>
      </Fragment>
    );

    const noAuthLinks = (
      <Fragment>
        <NavItem>
          <Link to='/register' className='navbar-text'>Register</Link>
        </NavItem>
      </Fragment>
    );

    return (
      <div>
        <Navbar color='dark' dark expand='sm' className='mb-5'>
          <Container>
            <NavbarBrand href='/'>Pipeline Tracker</NavbarBrand>
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className='ml-auto' navbar>
                  { isAuthenticated ? authLinks : noAuthLinks }
                </Nav>
              </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  };
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  null
)(NavBar);