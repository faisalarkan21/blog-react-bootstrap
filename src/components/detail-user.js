import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, initialize } from 'redux-form';
import { Col, Button } from 'react-bootstrap';


import { DashboardComponent, FieldInput, ShowAlert } from './lib';
import { required, email, minLength6, passwordConfirm } from '../middleware/rules-validator';


class DetailUser extends Component {
  // componentWillReceiveProps(nextProps) {
  //   console.log(nextProps);
  //
  // }


  componentWillMount() {
    this.handleInitialize();
  }
  // componentDidMount() {
  //   this.handleInitialize();
  // }

  handleInitialize() {
    const { dataObject } = this.props;

    // console.log(data);

    this.props.dispatch(initialize(
      'formDetailUser',
      {
        username: dataObject.username,
        email: dataObject.email,
        role_id: dataObject.role_id,
        grant_date: dataObject.grant_date,
        created_on: dataObject.created_on,
        last_login: dataObject.last_login,
      }, { keepDirty: true },
    ));
  }

  render() {
    const {
      handleSubmit, handleUpdate,
    } = this.props;

    // console.log(this.props);

    return (
      <DashboardComponent>
        <Col className="panel-well-data" xs={11} sm={11} md={11} lg={11}>
          <Col md={5} >
            <h3>Detail Data</h3>
          </Col>
          <form className="form-horizontal" onSubmit={handleSubmit(handleUpdate)} >
            <Col mdOffset={3} md={4}>
              <br />
              <Button type="submit" bsStyle="primary"> Simpan Data
                <i className="fa fa-refresh pull-right-mod" aria-hidden="true" />
              </Button>

            </Col>


            <Col className="margin-bottom-extra" xs={11} sm={11} md={11} lg={11}>
              <hr />

              <Col xs={5} sm={5} md={5} lg={5}>
                <Field
                  name="username"
                  icon={<i className="fa fa-user-circle fa-lg pull-right" aria-hidden="true" />}
                  component={FieldInput}
                  type="text"
                  label="Nama Pengguna"
                  placeholder="Nama Anda"
                  validate={required}
                  readOnly
                />


                <Field
                  name="email"
                  icon={<i className="fa fa-envelope fa-lg pull-right" aria-hidden="true" />}
                  component={FieldInput}
                  type="email"
                  label="Email"
                  placeholder="Email anda.."
                  validate={[required, email]}
                  readOnly
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

                />


                <Field
                  name="created_on"
                  icon={<i className="fa fa-clock-o fa-lg pull-right" aria-hidden="true" />}
                  component={FieldInput}
                  type="text"
                  label="Akun Dibuat Tanggal"
                  placeholder="Dibuat Tanggal"
                  readOnly

                />

                <Field
                  name="last_login"
                  icon={<i className="fa fa-clock-o fa-lg pull-right" aria-hidden="true" />}
                  component={FieldInput}
                  type="text"
                  label="Terakhir Login"
                  placeholder="Terakhir login"
                  readOnly

                />
              </Col>


            </Col>
            <ShowAlert
              status={(this.props.error === undefined
            && this.props.submitSucceeded)
            || this.props.error}
            />
          </form>
        </Col>
      </DashboardComponent>
    );
  }
}


export default reduxForm({
  form: 'formDetailUser',
  // enableReinitialize: true,
})(DetailUser);

