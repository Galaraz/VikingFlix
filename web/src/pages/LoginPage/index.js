import React from 'react';
import { LoginC } from '../../components';
import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';

import VikingLogo from '../../assets/vikingcute.png';
import './style.css';
class LoginPage extends React.Component {
  render() {
    return (
      <div className="main">
        <Container justify c>
          <Row xs={1} md={2}>
            <Col xs={6} md={4}>
              <Image alt="logo" src={VikingLogo} fluid />
            </Col>
            <Col>
              <Image
                alt="escrito"
                src="https://fontmeme.com/permalink/210214/bb759c00ee26a91a69a6a979f817d3a8.png"
              />
              <LoginC />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default LoginPage;
