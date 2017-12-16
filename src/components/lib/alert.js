import React from 'react';
import { Alert } from 'react-bootstrap';

const AlertSuccess = props =>
  (
    <Alert bsStyle="success" className="text-center alert">
      <b>  Anda sudah terdaftar. </b> <br />
        Anda akan dialihkan ke halaman login..
    </Alert>
  );


const AlertError = props =>
  (
    <Alert bsStyle="danger" className="text-center alert">
      <b> {props.message !== null ? props.message : 'Ups, Terjadi kesalahan!'}
        {props.isError}
      </b>
    </Alert>
  );

class ShowAlert extends React.Component {
  render() {
    const { status, message } = this.props;

    if (status === undefined) {
      return null;
    }

    return (
      <div>
        {status === true ? <AlertSuccess /> : <AlertError isError={status} message={message} /> }
      </div>
    );
  }
}


export { ShowAlert };

