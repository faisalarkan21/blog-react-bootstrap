import React, { Component } from 'react';
import {
  Panel,
  Col,
  Row,
} from 'react-bootstrap';

class DashboardComponent extends Component {
  render() {
    return (
      <Row>
        <Col className="dashboard-content panel-well-data" xs={8} md={8} lg={8}>
          {this.props.children}
        </Col>
      </Row>
    );
  }
}

export { DashboardComponent };
