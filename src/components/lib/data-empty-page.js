import React, { Component } from 'react';
import { Col, Panel } from 'react-bootstrap';
import { DashboardComponent } from './dashboard-component';

class DataEmpty extends Component {
  render() {
    return (
      <div>
        <DashboardComponent>
          <Col xs={4} md={4} lg={4}>
            <Panel bsStyle="info">
              <Panel.Heading>
                <Panel.Title componentClass="h3">Info</Panel.Title>
              </Panel.Heading>
              <Panel.Body>
                <h4>Tidak ada data
                &nbsp;
                  <i className="fa fa-bug" aria-hidden="true" />
                </h4>
              </Panel.Body>
            </Panel>
          </Col>
        </DashboardComponent>
      </div>
    );
  }
}

export { DataEmpty };
