import React, { Component } from 'react';
import { Col, Panel } from 'react-bootstrap';
import { DashboardComponent } from './dashboard-component';

class NotFound extends Component {
  render() {
    return (
      <div>
        <Col style={{ padding: 50, marginTop: 120 }} className="panel-well" mdOffset={3} xs={5} md={5} lg={5}>
          <h3>Halaman Tidak Ditemukan
                &nbsp;
            <i className="fa fa-bug" aria-hidden="true" />
          </h3>
        </Col>
      </div>
    );
  }
}

export { NotFound };
