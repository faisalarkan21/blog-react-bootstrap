import React, { Component } from 'react';
import { Panel, Col, Button } from 'react-bootstrap';

class Dashboard extends Component {
  render() {
    return (
      <div className >
        <Col xs={4} md={4} >
          <Panel header="Read Me" bsStyle="primary">
            Hi there, i'm just making webpack config and basic example component <code>bootstrap paper with react and redux stuff</code>, so i can clone this repo if need it &nbsp; 😎.
          </Panel>
          <Button bsStyle="primary">hello !</Button>
        </Col>
      </div>
    );
  }
}


export default Dashboard;
