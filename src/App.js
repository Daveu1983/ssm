import React, { Component } from 'react';
import './App.css';
import Email from './components/Email';
import Header from './components/Header';
import Show from './components/Show';

class App extends Component {

  state = {
    userDetails: [{}]
  }

  addDetails = (firstName, secondName, emailAddress) =>{
    let currentUserDetails = this.state.userDetails
    currentUserDetails.push({firstName:firstName, secondName:secondName, emailAddress:emailAddress})
    this.setState({userDetails: currentUserDetails})
  }

  render() {  
    return (  
        <div className="App">
          <Header />
          <div>
            <Email
              addDetailsClicked={this.addDetails}
            />
            {
              this.state.userDetails.map((element, index) => {   
                return <Show
                key={index}
                firstName={element.firstName}
                secondName={element.secondName}
                emailAddress={element.emailAddress}/>
              })
            }
            
          </div>
        </div>
    );
  }
}



export default App;
