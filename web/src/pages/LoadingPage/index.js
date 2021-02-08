import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';

/* import logo from '../../assets/logo.png'; */

class LoadingPage extends Component {
  render() {
    return (
      <>
        <Container className="logo">
          <img /* src={logo} */ alt="logo" />
        </Container>
        <Container  className="logo">         
          <Spinner animation="border" role="status" >
            <span className="sr-only">Loading...</span>
          </Spinner>
        </Container>
      </>
    );
  }
}

export default LoadingPage;
