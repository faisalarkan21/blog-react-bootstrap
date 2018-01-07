import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Panel,
  Col,
  Button,
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem,
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const AppNav = class extends Component {
  // console.log(props);
  render() {
    const { isPublicRoute } = this.props;
    return (
      <Navbar className="navbar navbar-default navbar-fixed-top">
        {isPublicRoute ? (
          <div>
            <Navbar.Header>
              <Navbar.Brand>
                <Link to="/">Reacting Blog</Link>
              </Navbar.Brand>
            </Navbar.Header>
            <Nav>
              <NavItem eventKey={1} href="#">Link</NavItem>
              <NavItem eventKey={2} href="#">Link</NavItem>
              <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                <MenuItem eventKey={3.1}>Action</MenuItem>
                <MenuItem eventKey={3.2}>Another action</MenuItem>
                <MenuItem eventKey={3.3}>Something else here</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={3.4}>Separated link</MenuItem>
              </NavDropdown>
            </Nav>
            <Navbar.Form pullRight>
              <IsLoggedButton {...this.props} />
            </Navbar.Form>
          </div>
       ) : (
         <div>
           <Navbar.Header>
             <Navbar.Brand>
               <Link to="/dashboard">Halaman Dahsboard</Link>
             </Navbar.Brand>
           </Navbar.Header>
           <Nav>
             <NavItem eventKey={1} href="#">Nama</NavItem>
             <NavItem eventKey={2} href="#">Link</NavItem>
           </Nav>
           <Navbar.Form pullRight>
             <IsLoggedButton {...this.props} />
           </Navbar.Form>
         </div>
       ) }
      </Navbar>
    );
  }
};

const IsLoggedButton = props => (
  props.isLoginAuthenticated ? (
    <Button onClick={props.isPublicRoute ? props.toDashboard : props.logOut} bsStyle="primary">
      {props.isPublicRoute ? 'Dahsboard' : 'Logout' }
    </Button>
  ) : (
    <div>
      <LinkContainer to="daftar">
        <Button className="btn-paired">Daftar</Button>
      </LinkContainer>
      <LinkContainer to="login">
        <Button className="btn-paired" bsStyle="primary">Login</Button>
      </LinkContainer>
    </div>
  ));


export { AppNav };

