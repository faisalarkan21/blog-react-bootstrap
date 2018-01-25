import React, { Component } from 'react';
import { Panel, Col, Breadcrumb } from 'react-bootstrap';
import { DashboardComponent } from './lib';

class Home extends Component {
  render() {
    return (
      <div>

        <DashboardComponent>
          <Col xs={6} md={6} lg={6}>
            <Panel bsStyle="primary">
              <Panel.Heading>Test Panel</Panel.Heading>
              <Panel.Body>Ini dashboard</Panel.Body>
            </Panel>
          </Col>
        </DashboardComponent>
      </div>
    );
  }
}

export default Home;
