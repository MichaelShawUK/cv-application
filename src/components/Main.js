import { Component } from "react";
import Header from "./Header.js";
import Bio from "./Bio.js";
import Experience from "./Experience.js";
import Education from "./Education.js";
import styled from "styled-components";

const StyledMain = styled.div`
  margin-left: 10px;
  margin-right: 20px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: #444;
`

class Main extends Component {
  render() {
    return (
      <StyledMain className="main">
        <Header />
        <Bio />
        <Experience />
        <Education />
      </StyledMain>
    )
  }
}

export default Main;