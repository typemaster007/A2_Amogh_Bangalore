import React, { Component } from "react";

export default class Login extends Component {
    render() {
        return (
            <form>
                <h2>This is a Placeholder Page. Not selected for Web assignment-2 </h2>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Submit</button>
                <p className="forgot-password ">
                    Forgot <a href="#">password?</a>
                </p>
            </form>
        );
    }
}