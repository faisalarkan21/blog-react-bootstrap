import React, { Component } from 'react';
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

class Dashboard extends Component {
  render() {
    const {
      testApi, data,
    } = this.props;

    console.log(this.props);

    return (
      <div>
        <Col id="post-panel" xs={5} md={5} lg={5}>
          <Panel bsStyle={data.message === '' ? 'primary' : 'warning'}>
            <Panel.Heading>Test Panel</Panel.Heading>
            <Panel.Body>
              {data.message === '' ?
                 'Hey you there, Call Me ! (┛◉Д◉)┛┻━┻' : data.message
                 || 'Hey calm down!, check the API server!' }
              <br />
              {data.database === '' ?
                 '' : data.database
                 || 'Internal server error.'}

            </Panel.Body>
          </Panel>
          <Button onClick={testApi} bsStyle="primary">Test API Connection</Button>
        </Col>
      </div>
    );
  }
}

export default Dashboard;
