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
    console.log(this.props);
    const {
      testApi, dataResponse,
    } = this.props;
    console.log(dataResponse);
    return (
      <div>
        <Col id="post-panel" xs={5} md={5} lg={5}>
          <Panel bsStyle={dataResponse.data.message === '' ? 'primary' : 'warning'}>
            <Panel.Heading>Test Panel</Panel.Heading>
            <Panel.Body>
              {dataResponse.data.message === '' ?
                 'Hey you there, Call Me ! (┛◉Д◉)┛┻━┻' : dataResponse.data.message
                 || 'Hey calm down!, check the API server!' }
              <br />
              {dataResponse.data.database === '' ?
                 '' : dataResponse.data.database
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
