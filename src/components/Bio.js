import { Component } from "react";
import styled from "styled-components";

const StyledBio = styled.p`
  font-size: 0.7rem;
`;

class Bio extends Component {
  render() {
    return (
      <>
        <h4>ABOUT ME</h4>
        <StyledBio>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lectus
          lectus, maximus a magna sit amet, blandit aliquam risus. Suspendisse
          eleifend est id leo pulvinar tempor. Phasellus imperdiet eget neque
          quis fringilla. Sed pulvinar tellus at odio finibus, ac molestie
          dolor.
        </StyledBio>
      </>
    );
  }
}

export default Bio;
