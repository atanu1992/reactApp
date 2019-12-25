import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { faSignInAlt, faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Navigation extends Component {
    render(props) {
        return (
            <nav className="navbar navbar-expand-sm navbar-custom">
                <Link className="navbar-brand" to="/">EduLearn</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCustom">
                    <i className="fa fa-bars fa-lg py-1 text-white"></i>
                </button>
                <div className="navbar-collapse collapse" id="navbarCustom">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            {/* <a className="nav-link" href="/#">Active</a> */}
                            <NavLink className="nav-link" to="/"><FontAwesomeIcon icon={faHome} /> Home</NavLink>
                        </li>
                    </ul>
                    <ul className="ml-auto navbar-nav">
                        <li className="nav-item">
                            <NavLink to="/login" className="text-white text-decoration-none"><FontAwesomeIcon icon={faSignInAlt} /> Login </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
