import React, { Component } from 'react';
import { Col, Panel } from 'react-bootstrap';
import { DashboardComponent } from './dashboard-component';

class ErrorPage extends Component {
  render() {
    return (
      <div>
        <DashboardComponent>
          <Col style={{ padding: 50 }} className="panel-well" xs={5} md={5} lg={5}>
            <h4>Internal Server Error
                &nbsp;
              <i className="fa fa-bug" aria-hidden="true" />
            </h4>
          </Col>
        </DashboardComponent>
      </div>
    );
  }
}

export { ErrorPage };
