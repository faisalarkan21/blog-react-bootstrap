import React, { Component } from 'react';
import { Col, Panel } from 'react-bootstrap';
import { DashboardComponent } from './dashboard-component';

class ErrorPage extends Component {
  render() {
    return (
      <div>
        <DashboardComponent>
          <Col xs={5} md={5} lg={5}>
            <Panel bsStyle="danger">
              <Panel.Heading>
                <Panel.Title componentClass="h3">Terjadi Kesalahan</Panel.Title>
              </Panel.Heading>
              <Panel.Body>
                <h4>Internal Server Error
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

export { ErrorPage };
