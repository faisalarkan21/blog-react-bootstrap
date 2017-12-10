import React from 'react';
import { Alert } from 'react-bootstrap';

const AlertSuccess = props =>
  (
    <Alert bsStyle="success" className="text-center ">
      <b> Selamat! </b> Anda telah terdaftar. <br />
        Anda Dialihkan ke halaman login.
    </Alert>
  );


const AlertError = props =>
  (
    <Alert bsStyle="danger" className="text-center ">
      <b>Ups, Terjadi kesalahan! <br /> </b>
      {props.isError}
    </Alert>
  );

class ShowAlert extends React.Component {
  render() {
    const { status } = this.props;

    if (status === undefined) {
      return null;
    }

    return (
      <div>
        {status === true ? <AlertSuccess /> : <AlertError isError={status} /> }
      </div>
    );
  }
}


export { ShowAlert };

