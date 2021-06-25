import React from "react";
import UserInfo from "./UserInfo.js";

export default class Comment extends React.Component {
  render() {
    return (
      <div className="commentSection">
        <UserInfo author={this.props.author} />
        <div className="comment-text">{this.props.text}</div>
        <div className="comment-date">{this.props.date}</div>
      </div>
    );
  }
}
