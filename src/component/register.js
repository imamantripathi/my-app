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
  color: white;
  font-size: 1em;
  background-color:${(props) => props.bgColor};
  display:${(props) => (props.flag === "1" ? "inline-block" : "block")};
  width:${(props) => (props.flag ==="1" ? "50%" : "100%")};
  padding: 0.25em 1em;
  margin: 0.25em;
  
  border-radius: 3px;
`;
  const StyledRegisterContainer = Styled.div`
  // width: 600px !important;
&:hover{
  box-shadow:0px 0px 5px black;
};
@media (max-width: 600px) {
  width:300px;
}
`;
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
        <Button type="button" flag="1" bgColor="red">
          Login
        </Button>
        <Button type="button" flag="1" bgColor="green">
          Login with Google
        </Button>
        <Button flag="0" bgColor="orange">
          Nothing
        </Button>
      </form>
    </StyledRegisterContainer>
  );
}
