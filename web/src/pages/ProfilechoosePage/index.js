import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

class ProfilechoosePage extends React.Component {
  render() {
    return (
      <div>
        <br />
        <h2> Quem esta Assitindo ?</h2>
        <br />
        <br />

        <Container>
          <Row></Row>
          <Row>
            <Col>
              <Card border="primary" style={{ width: '15rem' }}>
                <Card.Header>Perfil-Kids</Card.Header>
                <Card.Body>
                  <Card.Title>Perfil-Kids</Card.Title>
                  <Card.Text>Diversao para Criançada</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card border="primary" style={{ width: '15rem' }}>
                <Card.Header>Popular</Card.Header>
                <Card.Body>
                  <Card.Title>Popular</Card.Title>
                  <Card.Text>Os mais mais</Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card border="primary" style={{ width: '15rem' }}>
                <Card.Header>Personalizado</Card.Header>
                <Card.Body>
                  <Card.Title>Personalizado</Card.Title>
                  <Card.Text>crie perfil</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card border="primary" style={{ width: '15rem' }}>
                <Card.Header>Personalizado</Card.Header>
                <Card.Body>
                  <Card.Title>Personalizado</Card.Title>
                  <Card.Link href="/home">Crie perfil</Card.Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default ProfilechoosePage;
