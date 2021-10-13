import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import useData from "../../Hooks/useData";
import "./Manubar.css";
const Menubar = () => {
  const { foods } = useData();
  const foodQuantity = foods.reduce((pre, food) => pre + food.quantity, 0);

  const { user, logOut } = useAuth();

  return (
    <div className="">
      <Navbar className="nav-bg " expand="lg">
        <Container>
          <Navbar.Brand className="text-white" href="#">
            <h5 className="fw-bold">
              Feliciano <span>{user.displayName}</span>
            </h5>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="ms-auto my-2 my-lg-0 nav-item-parent" navbarScroll>
              <Nav.Link className="nav-item" href="#action1">
                Home
              </Nav.Link>
              <Nav.Link className="nav-item" href="#action2">
                About
              </Nav.Link>

              <Nav.Link className="nav-item" href="#" disabled>
                Menu
              </Nav.Link>
              <Nav.Link className="nav-item" href="#" disabled>
                Stories
              </Nav.Link>
              <Nav.Link className="nav-item" href="#" disabled>
                Contact
              </Nav.Link>

              <button className="nav-btn">Book a table</button>

              <NavLink to="/cart">
                <i className="fas fa-shopping-cart   position-relative">
                  <span
                    style={{ fontSize: 12 }}
                    className="position-absolute  top-0 start-100 translate-middle badge rounded-circle bg-danger"
                  >
                    {foodQuantity}
                  </span>
                </i>
              </NavLink>

              {user.displayName ? (
                <button onClick={logOut} className="ms-4">LogOut</button>
              ) : (
                <NavLink to="/login">
                  <span className="ms-4 text-white text-decoration-none">
                    Login
                  </span>
                </NavLink>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Menubar;
