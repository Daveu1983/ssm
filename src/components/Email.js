import React, { Component } from 'react';

class Email extends Component {

  state = {
    firstName: "", 
    secondName: "", 
    emailAddress: ""
  }

  firstNameBoxChanged = (event) =>{
    this.setState({firstName: event.target.value})
  }

  secondNameBoxChanged = (event) =>{
    this.setState({secondName: event.target.value})
  }

  emailBoxChanged = (event) =>{
    this.setState({emailAddress: event.target.value})
  }

  addDetailsClicked = () => {
    this.props.addDetailsClicked(this.state.firstName, this.state.secondName, this.state.emailAddress);

  } 

  render() {
    return (
      <div className="container generalContent">
        <form className="formInTheCentre">
            <div className="row">
              <div className="col-md-8"></div>
                <div className="col-md-3 col-12">  
                    <input onChange={this.firstNameBoxChanged} className="form-control" type="text"
                    placeholder="Enter first name "/>
                </div>
              <div className="col-md-8"></div>
                <div className="col-md-3 col-12"> 
                    <input onChange={this.secondNameBoxChanged} className="form-control" type="text"
                    placeholder="Enter second name "/>
                </div>
                <div className="col-md-8"></div>
                <div className="col-md-3 col-12">  
                    <input onChange={this.emailBoxChanged} className="form-control" type="text"
                    placeholder="Enter email address "/>
                </div>
                <div className="col-md-8"></div>
                <div className="col-md-3 col-12 text-center">
                    <button type="reset" className="btn btn-secondary"  onClick={this.addDetailsClicked}>
                    Register email
                    </button>
                </div>
            </div>
        </form>
      </div>
    );
  }
}



export default Email;