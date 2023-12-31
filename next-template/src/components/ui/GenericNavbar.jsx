import { useContext } from "react";

import { useRouter } from "next/router";
import Link from "next/link";

import { useSession } from "next-auth/react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { AuthContext } from "@/context/auth";

export const GenericNavbar = () => {
  const { data } = useSession();
  const { asPath } = useRouter();
  const { logout } = useContext(AuthContext);

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      sticky="top"
      className="p-2 fs-5"
    >
      <Link className="navbar-brand fs-3" href="/">
        Next-Template
      </Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Link
            className={`nav-item nav-link  ${asPath === "/" ? "active" : ""}`}
            href="/"
          >
            HomePage
          </Link>
          <Link
            className={`nav-item nav-link  ${
              asPath === "/second" ? "active" : ""
            }`}
            href="/second"
          >
            SecondPage
          </Link>
          <Link
            className={`nav-item nav-link  ${
              asPath === "/third" ? "active" : ""
            }`}
            href="/third"
          >
            ThirdPage
          </Link>
        </Nav>
        <Nav>
          <div className="d-flex justify-content-end">
            <span className="nav-item nav-link text-white text-primary">
              {data?.user.name}
            </span>
            <button
              onClick={logout}
              className="ms-2 nav-item nav-link btn btn-danger text-white"
              style={{ width: "100px" }}
            >
              Logout
            </button>
          </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
