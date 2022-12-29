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

  #file-input {
    display: none;
  }

  .upload-icon {
    cursor: pointer;
    display: block;
    font-size: 4rem;
    margin: 40px auto 20px;
    

  }

  label {
    text-align: center;
    cursor: pointer;

    &:hover {
      text-shadow: 0 0 5px white;
    }

    .testt {
      border: 2px solid red;
    }
  }

  textarea {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 0.7rem;
    width: 100%;
    display: block;
    resize: none;
  }

  #header-input {
    margin-top: 25px;
  }

  .check-mark {
    margin-right: 5px;
    position: relative;
    top: 1px;
  }

  .skill-input {
    width: 75%;
    font-size: 0.6rem;
    padding: 1px;
  }

  .skill-trash {
    margin-left: 5px;
    position: relative;
    top: 1px;
  }

  .add-skill {
    font-size: 1.5rem;
    &:hover {
      color: #b3e4b0;
    }
  }


  .qual-input {
    display: grid;
    grid-template-columns: 20% 40% 40%;
    gap: 1px;
  }


  .qual-input textarea,
  .job-input textarea {
    grid-column: 1 / -1;
    margin-bottom: 10px;
  }

  .job-input {
    display: grid;
    grid-template-columns: 50% 50%;
    gap: 1px;
  }

  .job-input input,
  .job-input textarea,
  .qual-input input,
  .qual-input textarea {
    font-size: 0.7rem;
    padding: 1px;
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
