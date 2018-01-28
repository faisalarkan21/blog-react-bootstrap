import React, { Component } from 'react';
import { connect } from 'redux';
import { Field, reduxForm, change } from 'redux-form';
import { Col, Button, Alert } from 'react-bootstrap';


import { DashboardComponent, FieldInput, AlertInstance, ShowAlert } from './lib';
import { required, email, minLength6, passwordConfirm } from '../middleware/rules-validator';


class DetailUser extends Component {
  componentWillReceiveProps(nextProps) {
    this.props.dispatch(change('formDetailUser', 'email', 'asas'));
  }

  render() {
    // console.log(this.props);
    // this.props.change('name', 'aasas');
    return (
      <DashboardComponent>
        <Col className="inner-panel" xs={4} sm={4} md={4} lg={4}>
          <h3>Detail Data</h3>
          <br />
          <form className="form-horizontal">
            <Field
              name="name"
              icon={<i className="fa fa-user-circle fa-lg pull-right" aria-hidden="true" />}
              component={FieldInput}
              type="text"
              placeholder="Nama Anda"
              validate={required}
            />


            <Field
              name="email"
              icon={<i className="fa fa-envelope fa-lg pull-right" aria-hidden="true" />}
              component={FieldInput}
              type="text"
              placeholder="Email anda.."
              validate={[required, email]}
            />

            <Field
              name="password"
              icon={<i className="fa fa-lock fa-lg pull-right" aria-hidden="true" />}
              component={FieldInput}
              type="password"
              placeholder="Password Anda"
              validate={[required, minLength6, passwordConfirm]}
            />

            <Field
              name="passwordConfirm"
              icon={<i className="fa fa-lock fa-lg pull-right" aria-hidden="true" />}
              component={FieldInput}
              type="password"
              placeholder="Konfirmasi Password"
              validate={[required, minLength6, passwordConfirm]}
            />

            <Col className="text-center">
              <Button type="submit" className="btn-form" bsStyle="primary">Daftar</Button>
            </Col>
          </form>

          <ShowAlert
            status={(this.props.error === undefined
            && this.props.submitSucceeded)
            || this.props.error}
          />
        </Col>
      </DashboardComponent>
    );
  }
}


DetailUser = reduxForm({
  form: 'formDetailUser',
})(DetailUser);

// DetailUser = connect(state => ({
//   DetailUser: this.props.data, // pull initial values from account reducer
// }))(DetailUser);

export default DetailUser;
