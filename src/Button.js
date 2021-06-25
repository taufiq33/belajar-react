import React from "react";

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.activateAlert = this.activateAlert.bind(this);
  }

  activateAlert() {
    console.log(`hello ${this}`);
    console.log(this);
  }

  render() {
    return <button onClick={this.activateAlert}>Click me!</button>;
  }
}

export default Button;
