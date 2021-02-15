import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';
import { Row, Col } from 'react-bootstrap';

import logo from '../../assets/vikingcute.png';

class LoadingPage extends Component {
  render() {
    return (
      <>
        <Container className="logo">
          <Row>
            <Col>
              <img src={logo} alt="logo" />
            </Col>
            <Col>
              <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
              </Spinner>
            </Col>
          </Row>
        </Container>
        
      </>
    );
  }
}

export default LoadingPage;
