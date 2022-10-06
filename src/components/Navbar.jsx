import React from 'react';
import {NavLink, useHistory} from 'react-router-dom';

export const Navbar = () => {
  const history = useHistory();
  const handleLogout = () => history.replace('/login');

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <h2 className="navbar-brand" href="#">
          Navbar
        </h2>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/men"> Men </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/women"> Women </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/search"> Search </NavLink>
            </li>
          </ul>
          <div className="d-flex align-items-end">
            <button className="btn btn-outline-warning" aria-current="page" onClick={handleLogout}> Logout </button>
          </div> 
        </div>       
      </div>
    </nav>
  )
}

