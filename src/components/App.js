import React, { Component } from 'react';
import { createGlobalStyle } from 'styled-components';
import Cv from './Cv';

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #ddd;
    font-family: Courier;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    margin: 5px 0;
  }

  .previous-job, .qualification {
    font-size: 0.7rem;
    margin: 10px 0;
  }

  .main h4 {
    margin-bottom: 10px;
  }

  .job-position, .company-name, .achievement, .institute {
    display: inline;
    font-weight: bold;
  }

  .arrow {
    position: relative;
    top: 2px;
  }
`

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
