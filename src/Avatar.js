import React from "react";

export default class Avatar extends React.Component {
  render() {
    return (
      <img
        className="comment-user-avatar"
        src={this.props.user.avatarUrl}
        alt={this.props.user.name}
      />
    );
  }
}
