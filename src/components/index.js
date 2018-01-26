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
    return (
      <div>
        <Col id="post-panel" xs={5} md={5} lg={5}>
          <Panel bsStyle="primary">
            <Panel.Heading>Test Panel</Panel.Heading>
            <Panel.Body>
              {dataResponse.message === '' ?
                 'Hey you there, Call Me ! (┛◉Д◉)┛┻━┻' : dataResponse.message }
              <br /> {dataResponse.database}
              <br /> {dataResponse.codeResponse}
            </Panel.Body>
          </Panel>
          <Button onClick={testApi} bsStyle="primary">Test API Connection</Button>
        </Col>
      </div>
    );
  }
}

export default Dashboard;
