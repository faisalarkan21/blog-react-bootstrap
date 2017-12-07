import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { browserHistory } from 'history';
import { Col, Button, Alert } from 'react-bootstrap';


import { required, email, minLength6, passwordConfirm } from '../middleware/rules-validator';
import { FieldInput, AlertInstance } from './lib';


class SignUp extends React.Component {
  render() {
    const {
      handleSubmit, handleSubmitApi,
    } = this.props;
    
    return (
      <div>
        <Col id="login-panel" className="panel panel-default panel-well" xs={10} sm={5} md={5} lg={4} xsOffset={1} smOffset={3} mdOffset={3} lgOffset={4} >
          <div>
            <h3 className="text-center"> Sign Up <i className="fa fa-sign-in fa-lg" aria-hidden="true" />
            </h3>
            <hr />
          </div>
          <Col className="inner-panel" xs={12} sm={9} md={10} lg={9} smOffset={1} lgOffset={1}>
            <form onSubmit={handleSubmit(handleSubmitApi)}>
              <div>
                <Field
                  name="name"
                  icon={<i className="fa fa-user-circle fa-lg" aria-hidden="true" />}
                  component={FieldInput}
                  type="text"
                  placeholder="Nama Anda"
                  validate={required}
                />
              </div>


              <div>
                <Field
                  name="email"
                  icon={<i className="fa fa-envelope fa-lg" aria-hidden="true" />}
                  component={FieldInput}
                  type="text"
                  placeholder="Email anda.."
                  validate={[required, email]}
                />
              </div>


              <div>
                <Field
                  name="password"
                  icon={<i className="fa fa-lock fa-lg" aria-hidden="true" />}
                  component={FieldInput}
                  type="password"
                  placeholder="Password Anda"
                  validate={[required, minLength6, passwordConfirm]}
                />
              </div>


              <div>
                <Field
                  name="passwordConfirm"
                  icon={<i className="fa fa-lock fa-lg" aria-hidden="true" />}
                  component={FieldInput}
                  type="password"
                  placeholder="Konfirmasi Password"
                  validate={[required, minLength6, passwordConfirm]}
                />
              </div>

              <Col className="text-center">
                <Button type="submit" className="btn-login" bsStyle="primary">Daftar</Button>
              </Col>
            </form>

            {this.props.submitSucceeded && (
            <Alert bsStyle="success" className="text-center ">
              <b> Selamat! </b> Anda telah terdaftar. <br />
              Anda Dialihkan ke halaman login.
            </Alert>)}
          </Col>
        </Col>


      </div>
    );
  }
}

export default reduxForm({
  form: 'formSignUp',
  onSubmitSuccess: (result, dispatch, props) => {

  },
})(SignUp);
