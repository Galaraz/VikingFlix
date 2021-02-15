import React from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

function Footer() {
  return (
    <footer>
      <Navbar expand="lg" variant="light" bg="light"  sticky="bottom" >
        <Container>
          <Navbar.Brand></Navbar.Brand>
          <Navbar.Brand>
            <span>
              <span>2021 &copy; </span>
              <a href="https://github.com/Galaraz">Galaraz</a>
            </span>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </footer>
  );
}

export default Footer;
