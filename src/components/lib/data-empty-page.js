import React, { Component } from 'react';
import { Col, Panel } from 'react-bootstrap';
import { DashboardComponent } from './dashboard-component';

class DataEmpty extends Component {
  render() {
    return (
      <div>
        <DashboardComponent>
          <Col style={{ padding: 50 }} className="panel-well" xs={5} md={5} lg={5}>
            <h4>Tidak ada data
                &nbsp;
              <i className="fa fa-bug" aria-hidden="true" />
            </h4>
          </Col>
        </DashboardComponent>
      </div>
    );
  }
}

export { DataEmpty };
