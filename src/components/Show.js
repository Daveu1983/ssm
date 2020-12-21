import React, { Component } from "react";

class Show extends Component {

  render() {
    return (
      <div className={"container"}>
        <div className="row generalContent">
            <div className="col-12 text-center">{this.props.firstName}</div>
            <div className="col-12 text-center">{this.props.secondName}</div>
            <div className="col-12 text-center">{this.props.emailAddress}</div>
        </div>
      </div>
    );
  }
}

export default Show;