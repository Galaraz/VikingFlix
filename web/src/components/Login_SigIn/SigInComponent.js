import React from 'react';
import { Form, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
class SignInComponent extends React.Component {
  render() {
    return (
      <Form>
        
        <Form.Row>
    <Col xs={7}>
    <Form.Group controlId="nameInput">
    <Form.Control type="text" placeholder="Seu nome" />
    </Form.Group>
    </Col>

    <Col>
    <Form.Group controlId="niverInput">
      <Form.Control placeholder="seu aniversario" />
      </Form.Group>
    </Col>
    
  </Form.Row>
          
       

        <Form.Group controlId="formBasicEmail">
          <Form.Control type="email" placeholder="E-mail" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Control type="password" placeholder="Senha" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Control type="password" placeholder="Confirma senha" />
        </Form.Group>

        <Button variant="primary" type="submit" size="lg" block href="/profile">
          Cadastrar
        </Button>
        <Button variant="link" type="submit" size="lg" block href="/">
          Já tenho uma conta
        </Button>
      </Form>
    );
  }
}

export default SignInComponent;
