import React from 'react';
import { Col, Button } from 'react-bootstrap';
import { Field, reduxForm, reset } from 'redux-form';
import { Link } from 'react-router-dom';
import { FieldInput, ShowAlert } from './lib';
import { required, email, minLength6 } from '../middleware/rules-validator';


const Dashboard = (props) => {
  const {
    handleSubmit, handleLogin, linkDaftar, message,
  } = props;

  return (
    <div>
      <Col id="login-panel" className="panel panel-default panel-well" xs={10} sm={5} md={5} lg={4} xsOffset={1} smOffset={3} mdOffset={3} lgOffset={4} >
        <div>
          <h3 className="text-center"> Sign In <i className="fa fa-sign-in fa-lg title-icon" aria-hidden="true" />

          </h3>
          <hr />
        </div>
        <Col xs={12} sm={9} md={10} lg={9} smOffset={1} lgOffset={1}>
          <form className="form-horizontal" onSubmit={handleSubmit(handleLogin)}>
            <Field
              name="email"
              icon={<i className="fa fa-envelope fa-lg pull-right" aria-hidden="true" />}
              component={FieldInput}
              type="numbers"
              placeholder="Email Anda"
              validate={[required, email]}
            />

            <Field
              name="password"
              icon={<i className="fa fa-eye-slash fa-lg pull-right" aria-hidden="true" />}
              component={FieldInput}
              type="password"
              placeholder="Password Anda"
              validate={[required, minLength6]}
            />

            <div className="login-panel-bottom">
              <Col className="label-padding" >
                <Link to="/">Lupa Password ?</Link>
              </Col>
              {message ? (<ShowAlert
                status={(false)}
                message={message.errorMessage}
              />
            ) : (
              <ShowAlert
                status={(props.error === undefined
            && props.submitSucceeded)
            || props.error}
              />)}

              <Col className="text-center">
                <Button className="btn-form" type="submit" bsStyle="primary">Login</Button>
              </Col>
              <Col className="label-padding" >
              Belum mendaftar  ? <Link to={linkDaftar} > Daftar disini. </Link>
              </Col>
            </div>
          </form>
        </Col>
      </Col>
    </div>
  );
};


export default reduxForm({
  form: 'formLogin',
  onSubmitSuccess(result, dispatch) {
    dispatch(reset('formLogin'));
  },
})(Dashboard);
