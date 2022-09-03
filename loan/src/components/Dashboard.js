import React from'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,Nav ,NavDropdown,Container} from 'react-bootstrap';

import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function App() {
  return (
    <div className="App">
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">BANK</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Home</Nav.Link>
            <Nav.Link href="#features">Apply Loan</Nav.Link>
         


            
          </Nav>
          <Nav>
            <Nav.Link href="#deets">About Us</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Help
            </Nav.Link>
            <NavDropdown title="MENU" id="collasible-nav-dropdown">
              
              <NavDropdown.Item href="#action/3.1">Home</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Signout
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">UserDetails</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Profile
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
    <CardGroup>
      <Card>
      <Card border="danger" style={{ width: '18rem' }}> 
       
        <Card.Body>
          <Card.Title>Personal Loan</Card.Title>
          <Card.Text>
          A personal loan allows you to borrow money to pay for personal
           expenses and then repay those funds over time.
          </Card.Text>
        </Card.Body>
      </Card>
      </Card>
      <Card>
      <Card border="info" style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Home Loan</Card.Title>
          <Card.Text>
        A home loan is a secured loan that is obtained to
         purchase a property by offering it as collateral.
        Home loans offer high-value funding at economical
         interest rates and for long tenors.
          </Card.Text>
        </Card.Body>
      </Card>
      </Card>
      <Card>
      <Card border="warning" style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Educational Loan</Card.Title>
          <Card.Text>
          Education loans are intended to cover the cost of tuition, books 
          and supplies, and living expenses while the borrower is in the process of pursuing a degree.
          </Card.Text>
        </Card.Body>
      </Card>
      </Card>
    </CardGroup>


</div>
  );
}

export default App;