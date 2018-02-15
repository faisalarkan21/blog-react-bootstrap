import React, { Component } from 'react';
import { Col, Panel } from 'react-bootstrap';
import { DashboardComponent } from './dashboard-component';

class NotFound extends Component {
  render() {
    return (
      <div>
        <DashboardComponent>
          <Col xs={5} md={5} lg={5}>
            <Panel bsStyle="info">
              <Panel.Heading>
                <Panel.Title componentClass="h3">Terjadi Kesalahan</Panel.Title>
              </Panel.Heading>
              <Panel.Body>
                <h4>Halaman Tidak Ditemukan
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

export { NotFound };
