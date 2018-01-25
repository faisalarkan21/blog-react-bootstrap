import React, { Component } from 'react';
import { Panel, Col, Table } from 'react-bootstrap';
import { DashboardComponent } from './lib';

class UserListComponent extends Component {
  render() {
    return (

      <DashboardComponent>
        <Col xs={6} md={6} lg={6}>
          <Table responsive>
            <thead>
              <tr>
                <th>#</th>
                <th>Email</th>
                <th>Nama</th>
                <th>Tanggal</th>
                <th>Total Disukai</th>
                <th>Table heading</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
              </tr>
            </tbody>
          </Table>;
        </Col>
      </DashboardComponent>

    );
  }
}


export default UserListComponent;
