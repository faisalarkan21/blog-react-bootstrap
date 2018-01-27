import React, { Component } from 'react';
import { Panel, Col, Table, Button } from 'react-bootstrap';
import { DashboardComponent } from './lib';

class UserListComponent extends Component {
  render() {
    const { data } = this.props;
    console.log(data);
    return (
      <DashboardComponent>
        <Col className="panel-well-data" xs={8} md={8} lg={8}>
          <h3>Pengguna Aktif</h3>
          <br />
          <Table align="right" responsive>
            <thead>
              <tr>
                <th>#</th>
                <th>Nama</th>
                <th>Email</th>
                <th>Dibuat Tanggal</th>
                <th>Hak Akses</th>
                <th>Tindakan</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, i) => (
                <tr key={item.user_id}>
                  <td>{i + 1}</td>
                  <td className="text-capitalize">{item.username}</td>
                  <td>{item.email}</td>
                  <td>{item.created_on}</td>
                  <td>{item.role_id}</td>
                  <td>
                    <Button bsStyle="primary">Detail</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>

        </Col>
      </DashboardComponent>

    );
  }
}


export default UserListComponent;
