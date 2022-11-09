import React, { Component } from "react";
import "./App.css";
import Register from "./component/register";
import Greet from "./component/greet";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isRegistered: false,
      name: null,
      email: null,
      password: null,
      showPass:false,

    };
  }
  registrationHandler = (event) => {
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    event.preventDefault();
     this.setState({
      name,email,password,isRegistered:true,
     })
  };
  showPassword = ()=>{
this.setState({
  showPass: !this.state.showPass,
})
  }
  render() {
    return (
      <div>
        {this.state.isRegistered ? (
          <Greet name={this.state.name} email={this.state.email}></Greet>
        ) : (
          <Register showPass={this.state.showPass} click={this.showPassword} submit={this.registrationHandler}></Register>
        )}
      </div>
    );
  }
}
export default App;
