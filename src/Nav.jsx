import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav()
{
    return(
        <div className="container-fluid nav_bg px-0">
        <div className="row mx-0">
          <div className="col-10 mx-auto">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
              <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">
                  <h3>React Web</h3>
                </NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                  aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <NavLink className="nav-link active" aria-current="page" to="/">
                        <p className="pt-3 mx-2">Home</p>
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/services">
                        <p className="pt-3 mx-2">Services</p>
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/about">
                        <p className="pt-3 mx-2">About Us</p>
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/contact">
                        <p className="pt-3 mx-2">Contact Us</p>
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    )
}
export default Nav;