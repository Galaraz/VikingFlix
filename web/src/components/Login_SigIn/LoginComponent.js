import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
class LoginComponent extends React.Component {
    render() {
        return (
            <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Control type="email" placeholder="E-mail"/>
            </Form.Group>
    
            <Form.Group controlId="formBasicPassword">
               <Form.Control type="password" placeholder="Senha" />
            </Form.Group>
            
            <Button variant="primary" type="submit" size="lg" block classeName="EntrarBnt" href="/home"> 
              Entrar
            </Button>
           
           
            <Button variant="link" type="submit" size="lg" block classeName="CriarBnt" href="/sigin">
              Criar uma conta
            </Button>
           
            <Form.Text className="text-muted">
          Esqueceu sua Senha?
        </Form.Text>
          </Form>
        );
      }}

export default LoginComponent;