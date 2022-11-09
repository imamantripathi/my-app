import React from "react";

export default function register(props) {
  return (
    <div className="container card p-4 mt-4 registered-container">
        <h1 className="text-center">Registration Form</h1>
      <form onSubmit={props.submit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label> &nbsp;
          <input type="text" name="name" className="form-control" />
          <label htmlFor="email">Email:</label> &nbsp;
          <input type="email" name="email" className="form-control" />
          <label htmlFor="password">Password:</label> &nbsp;
          <input type="Password" name="password" className="form-control" />
        </div>
        <button type="submit" className="btn btn-primary" >Register</button>
      </form>
    </div>
  );
}
