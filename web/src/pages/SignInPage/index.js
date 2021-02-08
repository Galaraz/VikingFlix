import React from 'react';
import { SignInC } from '../../components';
import Container from 'react-bootstrap/Container';
class SignInPage extends React.Component {
    render() {
        return (
          <div className="main">
            <Container className="logo">
              <img  alt="logo" />
            </Container>
    
            <Container>
              <SignInC />
            </Container>
          </div>
        );
      }
}

export default SignInPage;