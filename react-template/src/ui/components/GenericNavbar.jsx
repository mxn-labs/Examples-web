import { useContext } from "react";

import { Link, NavLink, useNavigate } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { AuthContext } from "../../auth/context/AuthContext";

export const GenericNavbar = () => {
  const { user, logoutUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const onLogout = () => {
    logoutUser();
    navigate("/", {
      replace: true,
    });
  };

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      sticky="top"
      className="p-2 fs-5"
    >
      <Link className="navbar-brand fs-3" to="/">
        React-Template
      </Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <NavLink
            className={({ isActive }) =>
              `nav-item nav-link  ${isActive ? "active" : ""}`
            }
            to="/"
          >
            HomePage
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `nav-item nav-link  ${isActive ? "active" : ""}`
            }
            to="/second"
          >
            SecondPage
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `nav-item nav-link  ${isActive ? "active" : ""}`
            }
            to="/third"
          >
            ThirdPage
          </NavLink>
        </Nav>
        <Nav>
          <div className="d-flex justify-content-end">
            <span className="nav-item nav-link text-white text-primary">
              {user?.name}
            </span>
            <button
              className="ms-2 nav-item nav-link btn btn-danger text-white"
              style={{ width: "100px" }}
              onClick={onLogout}
            >
              Logout
            </button>
          </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
