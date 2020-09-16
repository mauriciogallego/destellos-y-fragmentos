import React, { Component } from "react";
import "./login.css";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.change = this.change.bind(this);
  }
  state = {
    user: "",
    password: "",
  };

  change(event, key) {
    this.setState({ [key]: event.target.value });
    this.props.errorFunc()

  }
  render() {
    return (
      <div className="container">
        <p>Ingresa al sistema</p>
        <div className="icon-input">
          <input
            type="text"
            placeholder="usuario"
            value={this.state.user}
            onChange={(event) => this.change(event, "user")}
          />
          <i className="bx bx-user icon" />
          <div className="bg"></div>
        </div>
        <div className="icon-input">
          <input
            type="password"
            placeholder="constraseña"
            value={this.state.password}
            onChange={(event) => this.change(event, "password")}
          />
          <i className="bx bx-user icon" />
          <div className="bg"></div>
        </div>
        <div className="icon-input">
          <input type="submit" value="enviar" onClick={()=>this.props.auth(this.state)}/>
          <div className="bg"></div>
        </div>
      </div>
    );
  }
}
