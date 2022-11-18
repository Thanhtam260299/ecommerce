import { NavLink } from "react-router-dom";
import "./navbar.scss";

import { useSelector } from "react-redux";

const Navbar = () => {
  const state = useSelector((state) => state.handleCart);
  return (
    <div
      className="position-fixed top-0 start-0 end-0"
      style={{ zIndex: 100000 }}
    >
      <nav className="navbar navbar-expand-lg bg-white py-3 shadow-sm">
        <div className="container">
          <NavLink className="navbar-brand fs-4 fw-bold" to="/">
            LA COLLECTION
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/products">
                  Product
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
            </ul>
            <div className="buttons">
              <NavLink className="btn btn-outline-dark " to="/login">
                <i className="fa fa-sign-in me-1"></i> Login
              </NavLink>
              <NavLink className="btn btn-outline-dark ms-2" to="/register">
                <i className="fa fa-user-plus"></i> Register
              </NavLink>
              <NavLink className="btn btn-outline-dark ms-2" to="/cart">
                <i className="fa fa-shopping-cart"></i> Cart{" "}
                <span>({state.length})</span>
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
