import { Component } from "react";
import profilePic from '../assets/avatar-square.jpg';
import styled from "styled-components";

const StyledImg = styled.img`
  border-radius: 20%;
  justify-self: center;
  align-self: center;
  width: 80%;
`

class Avatar extends Component {
  render() {
    return (
      <StyledImg src={profilePic} alt="profile"></StyledImg>
    )
  }
}

export default Avatar;