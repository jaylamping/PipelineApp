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
            <NavbarBrand href='/'>Comp Tracker</NavbarBrand>
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className='ml-auto' navbar>
                  <NavItem>
                    <NavLink href='https://github.com/jaylamping/PipelineApp' target='_blank'>
                      Github
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href='https://www.oneok.com' target='_blank'>
                      ONEOK
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