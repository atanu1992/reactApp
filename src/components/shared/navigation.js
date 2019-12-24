import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navigation extends Component {
    render(props) {
        return (
            <nav className="navbar navbar-expand-sm navbar-custom">
                {/* <a href="/" className="navbar-brand">ReactApp</a> */}
                <Link className="navbar-brand" to="/">ReactApp</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCustom">
                    <i className="fa fa-bars fa-lg py-1 text-white"></i>
                </button>
                <div className="navbar-collapse collapse" id="navbarCustom">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            {/* <a className="nav-link" href="/#">Active</a> */}
                            <Link className="nav-link" to="/about">Active</Link>
                        </li>
                        {/* <li className="nav-item">
                            <a className="nav-link" href="/#">Link</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/#">Link</a>
                        </li> */}
                    </ul>
                    <span className="ml-auto navbar-text">Text</span>
                </div>
            </nav>
        )
    }
}
