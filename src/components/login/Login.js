import React, { Component } from 'react'

export default class Login extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-4 mt-5">

                        <div className="card card-outline-secondary">
                            <div className="card-header">
                                <h3 className="mb-0 text-center">Login</h3>
                            </div>
                            <div className="card-body">
                                <form className="form" autoComplete="off" id="loginForm" noValidate="" method="POST">
                                    <div className="form-group">
                                        <label htmlFor="username">Username</label>
                                        <input type="text" className="form-control" name="username" id="username" required="" />
                                        <div className="invalid-feedback">Please enter your username or email</div>
                                    </div>

                                    <div className="form-group">
                                            <label>Password</label>
                                            <input type="password" className="form-control" name="password" id="password" required=""/>
                                                <div className="invalid-feedback">Please enter a password</div>
                                    </div>
                                    <button type="submit" className="btn btn-success btn-md float-right" id="btnLogin">Login</button>
                                </form>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-4"></div>
                </div>
            </React.Fragment>
        )
    }
}
