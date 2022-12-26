import { Component } from "react";
import { FaCheck } from "react-icons/fa";
import styled from "styled-components";

const StyledSkills = styled.div`
  padding-left: 10px;  
`

class Skills extends Component {
  render() {
    return (
      <StyledSkills>
        <h3>Skills</h3>
        <hr></hr>
        <ul>
          <li><FaCheck /> HTML, CSS</li>
          <li><FaCheck /> JavaScript</li>
          <li><FaCheck /> ReactJS</li>
          <li><FaCheck /> Git</li>
          <li><FaCheck /> Linux</li>
        </ul>
      </StyledSkills>
    )
  }
}

export default Skills;