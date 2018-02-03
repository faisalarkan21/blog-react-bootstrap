import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import { DashboardComponent } from './lib';

class Home extends Component {
  render() {
    const { arrayLastLogin, dataObject } = this.props;

    return (
      <div>
        <DashboardComponent>
          <Col className="panel-well-data" xs={12} md={12} lg={12}>
            <Row>
              <Col md={7} >
                <h4>Login Terakhir Pengguna
                  <i className="fa fa-clock-o fa-lg fa-lg pull-right" />
                </h4>
              </Col>
              <Col md={5} >
                <h4>Statistik Pengguna
                  <i className="fa fa-user-circle fa-lg pull-right" />
                </h4>
              </Col>
            </Row>
            <br />
            <Row>
              <Col md={7}>
                <ul className="list-group">
                  {arrayLastLogin.map((item, i) => (
                    <li key={item.user_id} className="list-group-item text-capitalize">
                      {item.username}
                      <span className="badge home-badge">{item.last_login}
                        <i className="fa fa-clock-o fa-lg fa-lg pull-left" />
                      </span>
                    </li>
                  ))}
                </ul>
              </Col>
              <Col md={5}>
                <ul className="list-group">
                  <li className="list-group-item text-capitalize">
                    Jumlah Penulis
                    <span className="badge home-badge">{dataObject.totalwriter}
                      <i className="fa fa-user-circle fa-lg fa-lg pull-left" />
                    </span>
                  </li>
                  <li className="list-group-item text-capitalize">
                    Jumlah Administrator
                    <span className="badge home-badge">{dataObject.totaladmin}
                      <i className="fa fa-user-circle fa-lg fa-lg pull-left" />
                    </span>
                  </li>
                  <li className="list-group-item text-capitalize">
                    Total Pengguna
                    <span className="badge home-badge">{dataObject.totaluser}
                      <i className="fa fa-user-circle fa-lg fa-lg pull-left" />
                    </span>
                  </li>
                </ul>
              </Col>
            </Row>
          </Col>
        </DashboardComponent>
      </div>
    );
  }
}

export default Home;
