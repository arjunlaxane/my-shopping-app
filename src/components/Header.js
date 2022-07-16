import React from 'react';
import {
  Navbar,
  FormControl,
  Container,
  Badge,
  Nav,
  Dropdown,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { FaShoppingCart } from 'react-icons/fa';

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" style={{ height: 80 }}>
      <Container>
        <Navbar.Brand>
          <Link to="/">Shopping App</Link>
        </Navbar.Brand>

        <Navbar.Text className="search">
          <FormControl
            style={{ width: 500 }}
            placeholder="Search a product"
            className="m-auto"
          />
        </Navbar.Text>

        <Nav>
          <Dropdown>
            <Dropdown.Toggle variant="success">
              <FaShoppingCart color="white" fontSize="25px" />
              <Badge>{10}</Badge>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <span style={{ padding: 10 }}>Card is empty</span>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
