import React, { Component } from 'react';
import { Panel, Col, Button, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import { test, showResults, postApi } from '../middleware/api';


class Dashboard extends Component {
  render() {
    const { linkLogin, linkDaftar } = this.props;
    return (
      <div>
        <Navbar className="navbar navbar-default navbar-fixed-top">
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/login">Reacting Blog</a>
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
          <Navbar.Form pullRight >
            <LinkContainer to={linkDaftar} >
              <Button className="btn-paired">Daftar</Button>
            </LinkContainer>
            <LinkContainer to={linkLogin} >
              <Button bsStyle="primary">Login</Button>
            </LinkContainer>
          </Navbar.Form>

        </Navbar>


        <Col id="post-panel" xs={4} md={5} lg={4} >
          <Panel header="Post Panel" bsStyle="primary">
            Not yet implemented
          </Panel>
          <Button onClick={postApi} bsStyle="primary">Di Baca Gan!</Button>
        </Col>


      </div>
    );
  }
}


export default Dashboard;
