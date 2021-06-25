import React from "react";

class Konten extends React.Component {
  render() {
    return (
      <div>
        <h1 style={{ color: this.props.warna }}>
          Hello {this.props.name} from Konten.js
        </h1>
      </div>
    );
  }
}

export default Konten;
