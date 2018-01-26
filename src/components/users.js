import React, { Component } from 'react';
import { Panel, Col, Table } from 'react-bootstrap';
import { DashboardComponent } from './lib';

class UserListComponent extends Component {
  render() {
    const { data } = this.props;
    console.log(data);

    if (data) {
      return (

        <DashboardComponent>
          <Col xs={6} md={6} lg={6}>
            <Table responsive>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Nama</th>
                  <th>Email</th>
                  <th>Dibuat Tanggal</th>
                  <th>Terakhir Login</th>
                  <th>Tindakan</th>
                </tr>
              </thead>
              <tbody>


                {data.map(item => (
                  <tr>
                    <td>{item.user_id}</td>
                    <td>{item.username}</td>
                    <td>{item.email}</td>
                    <td>{item.created_on}</td>
                    <td>{item.created_on}</td>
                  </tr>
              ))}


              </tbody>
            </Table>;
          </Col>
        </DashboardComponent>

      );
    }

    return (

      <DashboardComponent>
        <Col xs={6} md={6} lg={6}>
          <Table responsive>
            <thead>
              <tr>
                <th>#</th>
                <th>Nama</th>
                <th>Email</th>
                <th>Dibuat Tanggal</th>
                <th>Terakhir Login</th>
                <th>Tindakan</th>
              </tr>
            </thead>
            <tbody>
              {/* {data.map(item => <td key={item.username} name={item.email} />)} */}

            </tbody>
          </Table>;
        </Col>
      </DashboardComponent>
    );
  }
}


export default UserListComponent;
