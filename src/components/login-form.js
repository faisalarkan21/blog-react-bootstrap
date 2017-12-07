import React from 'react';
import { Col, Button } from 'react-bootstrap';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { FieldInput } from './lib';
import { required, email, minLength6 } from '../middleware/rules-validator';


const Dashboard = (props) => {
  const { handleSubmit, linkDaftar } = props;
  return (
    <div>
      <Col id="login-panel" className="panel panel-default panel-well" xs={10} sm={5} md={5} lg={4} xsOffset={1} smOffset={3} mdOffset={3} lgOffset={4} >
        <div>
          <h3 className="text-center"> Sign In <i className="fa fa-sign-in fa-lg" aria-hidden="true" />

          </h3>
          <hr />
        </div>
        <Col className="inner-panel" xs={12} sm={9} md={10} lg={9} smOffset={1} lgOffset={1}>
          <form onSubmit={handleSubmit}>
            <div>
              <Field
                name="email"
                icon={<i className="fa fa-envelope fa-lg" aria-hidden="true" />}
                component={FieldInput}
                type="numbers"
                placeholder="Email Anda"
                validate={[required, email]}
              />
            </div>

            <div>
              <Field
                name="password"
                icon={<i className="fa fa-eye-slash fa-lg" aria-hidden="true" />}
                component={FieldInput}
                type="password"
                placeholder="Password Anda"
                validate={[required, minLength6]}
              />
            </div>

            <Col className="label-padding" lg={9} >
              <Link to="/">Lupa Password ?</Link>
            </Col>

            <Col className="text-center">
              <Button className="btn-login" type="submit" bsStyle="primary">Login</Button>
            </Col>
            <Col className="label-padding" lg={12} >
              Belum mendaftar  ? <Link to={linkDaftar} > Daftar disini. </Link>
            </Col>

          </form>
        </Col>
      </Col>


    </div>
  );
};


export default reduxForm({
  form: 'formLogin',
})(Dashboard);
