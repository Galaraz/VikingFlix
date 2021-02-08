import React from 'react';
import { LoginC } from '../../components'
import Container from 'react-bootstrap/Container';


/* import emailIcon from '../../assets/emailIcon.svg'; */

class LoginPage extends React.Component {
  render() {
    return (
      <div className="main">
        <Container className="logo">
          <img alt="logo" />
        </Container>

        <Container>
          <LoginC />
        </Container>
      </div>
    );
  }
}

export default LoginPage;
