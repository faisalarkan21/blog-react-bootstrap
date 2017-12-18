import React, { Component } from 'react';
import {
  Panel,
  Col,
} from 'react-bootstrap';

class Dashboard extends Component {
  render() {
    return (
      <div>


        <Col id="post-panel" xs={5} md={5} lg={5}>
          <Panel header="Test Panel" bsStyle="primary">
            Ini dashboard
          </Panel>


        </Col>

      </div>
    );
  }
}

export default Dashboard;
