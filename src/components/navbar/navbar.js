import React from 'react';
import './navbar.css'

import {
    NavLink
} from "react-router-dom";

const Navbar = (props) => {
    return (
        <div className="navbar">
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/"> Logo </NavLink>
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/work">Work</NavLink>
        </div>
    );
}

export default Navbar;