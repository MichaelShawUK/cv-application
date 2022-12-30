import React, { Component } from 'react';
import GlobalStyle from "../globalStyle.js";
import Cv from './Cv';

class App extends Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <Cv />
      </>
    )
  }
}

export default App;