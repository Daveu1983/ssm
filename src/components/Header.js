
import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div className="container">
        <header> 
          <div className="row  generalText">
            <div className="col-12">
            <h1>Social.Style.Media </h1>
            </div> 
            <div className="col-12">
              <h2>by Emma</h2>
            </div>
            <div className="col-12">
              <h6>Is it time to mix it up? </h6>
              <p> enter your details below and Emma will be in touch with more information</p>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default Header;