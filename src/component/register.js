import React from "react";
import Styled from "styled-components";

export default function register(props) {
  // Edit show and Hide Password
  //   let btnStyle;
  let passwordBoxType = "Password";
  let btnClasses = ["btn ", "m-1 "];
  //   btnStyle = { backgroundColor: "green" };
  let btnText = "Show Password";
  if (props.showPass === true) {
    // btnStyle.backgroundColor = "red";
    btnClasses.push("btn-danger ");
    btnText = "Hide Password";
    passwordBoxType = "Text";
  } else {
    btnClasses.push("btn-success ");
  }
  const Button = Styled.button`
  color: palevioletred;
  font-size: 1em;
  display:block;
  width:100%;
 
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;
const StyledRegisterContainer = Styled.div`width: 400px;`; 
  return (
    <StyledRegisterContainer className="container card p-4 mt-4 registered-container">
      <h1 className="text-center">Registration Form</h1>
      <form onSubmit={props.submit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label> &nbsp;
          <input type="text" name="name" required className="form-control" />
          <label htmlFor="email">Email:</label> &nbsp;
          <input type="email" name="email" required className="form-control" />
          <label htmlFor="password">Password:</label> &nbsp;
          <input
            type={passwordBoxType}
            name="password"
            required
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Register
        </button>{" "}
        &nbsp;
        <button
          type="button"
          className={btnClasses.join(" ")}
          onClick={props.click}
          //   style={btnStyle}
        >
          {btnText}
        </button>
        <Button type="button">Login</Button>
       
      </form>
    </StyledRegisterContainer>
  );
}
