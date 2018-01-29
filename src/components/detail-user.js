import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, initialize } from 'redux-form';
import { Col, Button } from 'react-bootstrap';


import { DashboardComponent, FieldInput, ShowAlert } from './lib';
import { required, email, minLength6, passwordConfirm } from '../middleware/rules-validator';


class DetailUser extends Component {
  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    const { data } = nextProps;

    console.log(data);

    this.props.dispatch(initialize(
      'formDetailUser',
      {
        username: data.username,
        email: data.email,
        role_id: data.role_id,
        grant_date: data.grant_date,
        created_on: data.created_on,
        last_login: data.last_login,
      }, { keepDirty: true },
    ));
  }

  render() {
    return (
      <DashboardComponent>
        <Col className="panel-well-data" xs={11} sm={11} md={11} lg={11}>
          <Col md={5} >
            <h3>Detail Data</h3>
          </Col>
          <Col mdOffset={3} md={4}>
            <br />
            <Button type="submit" bsStyle="primary">Simpan Data
              <i className="fa fa-refresh pull-right-mod" aria-hidden="true" />
            </Button>
          </Col>


          <Col className="margin-bottom-extra" xs={11} sm={11} md={11} lg={11}>
            <hr />

            <form className="form-horizontal">
              <Col xs={5} sm={5} md={5} lg={5}>
                <Field
                  name="username"
                  icon={<i className="fa fa-user-circle fa-lg pull-right" aria-hidden="true" />}
                  component={FieldInput}
                  type="text"
                  label="Nama Pengguna"
                  placeholder="Nama Anda"
                  validate={required}
                />


                <Field
                  name="email"
                  icon={<i className="fa fa-envelope fa-lg pull-right" aria-hidden="true" />}
                  component={FieldInput}
                  type="email"
                  label="Email"
                  placeholder="Email anda.."
                  validate={[required, email]}
                />

                <Field
                  name="role_id"
                  icon={<i className="fa fa-shield fa-lg pull-right" aria-hidden="true" />}
                  component={FieldInput}
                  type="select"
                  label="Hak Akses"
                  placeholder="Hak Akses"
                  validate={[required, minLength6, passwordConfirm]}
                />
              </Col>
              <Col mdOffset={1} xs={5} sm={5} md={5} lg={5}>
                <Field
                  name="grant_date"
                  icon={<i className="fa fa-clock-o fa-lg pull-right" aria-hidden="true" />}
                  component={FieldInput}
                  type="text"
                  label="Diberikan Akses Tanggal"
                  placeholder="Akses tanggal"
                  readOnly
                  validate={required}
                />


                <Field
                  name="created_on"
                  icon={<i className="fa fa-clock-o fa-lg pull-right" aria-hidden="true" />}
                  component={FieldInput}
                  type="text"
                  label="Akun Dibuat Tanggal"
                  placeholder="Dibuat Tanggal"
                  readOnly
                  validate={[required, email]}
                />

                <Field
                  name="last_login"
                  icon={<i className="fa fa-clock-o fa-lg pull-right" aria-hidden="true" />}
                  component={FieldInput}
                  type="text"
                  label="Terakhir Login"
                  placeholder="Terakhir login"
                  readOnly
                  validate={[required, minLength6, passwordConfirm]}
                />
              </Col>


            </form>
          </Col>
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


export default DetailUser;
