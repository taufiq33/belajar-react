import React from "react";
import Avatar from "./Avatar.js";

export default class UserInfo extends React.Component {
  render() {
    return (
      <div className="comment-info-user">
        <Avatar user={this.props.author} />
        <div className="comment-user-name">{this.props.author.name}</div>
      </div>
    );
  }
}
