import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { MDBContainer } from "mdbreact";
import Authenticate from './Authenticate';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <MDBContainer className="App">
          <Authenticate />
        </MDBContainer>
      </BrowserRouter>
    );
  }
}

export default App;
