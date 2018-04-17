import React, { Component } from 'react';
import {
  Panel,
  Col,
  Row,
  Button,
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem,
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

class Dashboard extends Component {
  render() {
    const {
      testApi, data,
    } = this.props;

    return (
      <div>
        <Row>
          <Col style={{ marginLeft: 120, marginTop: 120 }} xs={4} md={4} lg={4}>
            <Panel bsStyle="primary">
              <Panel.Heading>React Boostrap Stater Front-end @Faisal Arkan</Panel.Heading>
              <Panel.Body>
             Project stater ini sengaja dibuat untuk mempermudah saya membuat project lain.
             Library yang digunakan sebagai berikut :

                <ul style={{ marginTop: 10 }}>
                  <li>
                react 16
                  </li>
                  <li>
                redux 3.7.2
                  </li>
                  <li>
                redux Form 7.2.1
                  </li>
                  <li>
                react Boostrap
                  </li>
                  <li>js-cookie</li>
                  <li>
                axios
                  </li>
                  <li>
                menggunakan node-sass (SASS)
                  </li>
                  <li>
                reapop (Untuk Notification)
                  </li>
                  <li>
                react Router 4
                  </li>
                  <li>
                redux Thunk
                  </li>
                  <li>
                eslint with airbnb standard
                  </li>
                  <li>
                Webpack 3
                  </li>
                  <li>
                babel-preset-env
                  </li>
                  <li>
                font-awesome
                  </li>
                  <li>
                moment.js
                  </li>
                  <li>
                react-metismenu
                  </li>
                </ul>
              </Panel.Body>
            </Panel>
          </Col>


          <Col style={{ marginLeft: 40, marginTop: 120 }} xs={5} md={5} lg={5}>
            <Panel bsStyle="warning">
              <Panel.Heading>React Boostrap Stater Back-end @Faisal Arkan</Panel.Heading>
              <Panel.Body>
                Back-end sudah support menggunakan JWT Token untuk dan menggunakan postgreSQL untuk databasenya,
             Pada Back-end Menggunakan library berikut :

                <ul style={{ marginTop: 10 }}>
                  <li>
              express.js
                  </li>
                  <li>
                express-jwt
                  </li>
                  <li>
                jsonwebtoken
                  </li>
                  <li>
                moment
                  </li>
                  <li>
                morgan
                  </li>
                  <li>
                pg
                  </li>
                  <li>
                cors
                  </li>
                  <li>
                crypto-js
                  </li>
                  <li>
                eslint with airbnb standard
                  </li>
                  <li>
                react Boostrap
                  </li>
                </ul>
              </Panel.Body>
            </Panel>
          </Col>
        </Row>

        <Row>

          <Col style={{ marginLeft: 120, marginBottom: 150 }} xs={4} md={4} lg={4}>
            <Panel bsStyle={data.message === '' ? 'primary' : 'warning'}>
              <Panel.Heading>Test Panel</Panel.Heading>
              <Panel.Body>
                {data.message === '' ?
                 'Hey you there, Call Me ! (┛◉Д◉)┛┻━┻' : data.message
                 || 'Hey calm down!, check the API server!' }
                <br />
                {data.database === '' ?
                 '' : data.database
                 || 'Internal server error.'}

              </Panel.Body>
            </Panel>
            <Button onClick={testApi} bsStyle="primary">Test API Connection</Button>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Dashboard;
