import { Component } from 'react';
import styled from 'styled-components';

const StyledHeader = styled.div`
  /* background-color: #e9bd88ad; */
  /* color: #222126; */
  /* padding: 5px 40px 5px 10px; */
`

class Header extends Component {
  render() {
    return (
      <StyledHeader>
        <h1>JOE Bloggs</h1>
        <h3>Web Developer</h3>
      </StyledHeader>
    )
  }
}

export default Header;
