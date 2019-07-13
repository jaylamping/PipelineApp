import React, { Component } from 'react';
import {
  Collapse,
  Container,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

class NavBar extends Component {
  
  state = {
      isOpen: false
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    return (
      <div>
        <Navbar color='dark' dark expand='sm' className='mb-5'>
          <Container>
            <NavbarBrand href='/'>Callout List</NavbarBrand>
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className='ml-auto' navbar>
                  <NavItem>
                    <NavLink href='https://github.com'>
                      Github
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href='https://youtube.com'>
                      YouTube
                    </NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  };
};

export default NavBar;