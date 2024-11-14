import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React from 'react';
import { NavLink } from 'react-router-dom';


const Menu = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light py-3">
            <div className="container">
                <NavLink to="/" className="navbar-brand fw-bold fs-3">MyBrand</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto flex-lg-row">
                        <li className="nav-item me-4">
                            <NavLink to="/" className={({ isActive }) => isActive ? "active-item" : "pending-item"}>Home</NavLink>
                        </li>
                        <li className="nav-item me-4">
                            <NavLink to="/about" className={({ isActive }) => isActive ? "active-item" : "pending-item"}>About</NavLink>
                        </li>
                        <li className="nav-item me-4">
                            <NavLink to="/product" className={({ isActive }) => isActive ? "active-item" : "pending-item"}>Product</NavLink>
                        </li>
                        <li className="nav-item me-4">
                            <NavLink to="/profile" className={({ isActive }) => isActive ? "active-item" : "pending-item"}>Profile</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Menu;
