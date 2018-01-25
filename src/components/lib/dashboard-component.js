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
        <Col className="dashboard-content" xs={12} md={12} lg={12}>

          {this.props.children}


        </Col>

      </Row>
    );
  }
}

export { DashboardComponent };
