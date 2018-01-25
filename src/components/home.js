import React, { Component } from 'react';
import { Panel, Col } from 'react-bootstrap';
import { DashboardComponent } from './lib';

class Home extends Component {
  render() {
    return (
      <div>
        <DashboardComponent>
          <Col xs={6} md={6} lg={6}>
            <Panel header="Test Panel" bsStyle="primary">
            Ini dashboard Ver 1
            </Panel>
          </Col>
        </DashboardComponent>
      </div>
    );
  }
}

export default Home;
