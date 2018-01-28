import React, { Component } from 'react';
import { Panel, Col, Table, Button } from 'react-bootstrap';
import { DashboardComponent } from './lib';

class UserListComponent extends Component {
  render() {
    const { data } = this.props;
    // console.log(this.props);
    return (
      <DashboardComponent>
        <Col className="panel-well-data" xs={8} md={8} lg={8}>
          <Col md={4} >
            <h3>Pengguna Aktif</h3>
          </Col>
          <br />
          <Col mdOffset={10} className="panel-refresh" >
            <Button bsStyle="primary" onClick={this.props.handleRefresh} >Refresh
              <i className="fa fa-refresh pull-right-mod" aria-hidden="true" />
            </Button>
          </Col>
          <Col md={12}>
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

        </Col>
      </DashboardComponent>

    );
  }
}


export default UserListComponent;
