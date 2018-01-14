import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem,
  ListGroup,
  ListGroupItem,
  DropdownButton,
  Dropdown,
} from 'react-bootstrap';
import MetisMenu from 'react-metismenu';
import { LinkContainer } from 'react-router-bootstrap';


const content = [


  {
    icon: 'home',
    label: 'Dashboard',
    to: '/dashboard',
  },
  {
    icon: 'user-circle ',
    label: 'Daftar Pengguna',
    to: '#another-link',
  },
  {
    icon: 'newspaper-o',
    label: 'Daftar Artikel',
    content: [
      {
        icon: 'tag',
        label: 'Artikel Pemrograman',
        to: '#another-link',
      },
      {
        icon: 'tag',
        label: 'Artikel Motivasi',
        to: '#another-link',
      },
    ],
  },
];


const AppNav = class extends Component {
  render() {
    console.log(this.props);
    const { isPublicRoute, dataToken } = this.props;
    return (
      <div>
        {isPublicRoute ? (

          <Navbar className="navbar navbar-default navbar-fixed-top sidebar-crop">
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
          </Navbar>
       ) : (
         <div>
           <ListGroup className="nav-profile">
             <ListGroupItem className="nav-profile-inner" header="React Bloging">Versi 0.9</ListGroupItem>
           </ListGroup>
           <Navbar className="nav-dashboard" fluid>
             <Navbar.Header>
               <h3 className="title-nav">Halaman Dashboard</h3>
             </Navbar.Header>
             <Navbar.Form pullRight>
               <Dropdown id={`dropdown-basic-${1}`}>
                 <Dropdown.Toggle>
                   <i className="fa fa-cogs pull-left-mod" />
                   {dataToken.username || null}
                 </Dropdown.Toggle>
                 <Dropdown.Menu className="super-colors">
                   <MenuItem eventKey="1">
                     <i className="fa fa-user-circle-o pull-left-mod" aria-hidden="true" />
                   Profile Anda
                   </MenuItem>
                   <MenuItem divider />
                   <MenuItem
                     onClick={this.props.isPublicRoute ? this.props.toDashboard : this.props.logOut}
                     eventKey="4"
                   >
                     <i className="fa fa-sign-out pull-left-mod" aria-hidden="true" />
                     {this.props.isPublicRoute ? 'Dahsboard' : 'Logout' }
                   </MenuItem>
                 </Dropdown.Menu>
               </Dropdown>
             </Navbar.Form>
           </Navbar>
           <MetisMenu
             className="nav-metis nav-inverse"
             content={content}
             activeLinkFromLocation
             iconNameStateHidden="angle-double-left"
             iconNameStateVisible="angle-double-left rotate-minus-90"
           />
         </div>
       ) }
      </div>
    );
  }
};

const IsLoggedButton = props => (
  props.isLoginAuthenticated ? (

    <Button onClick={props.isPublicRoute ? props.toDashboard : props.logOut} >
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

