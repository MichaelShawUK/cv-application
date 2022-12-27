import { Component } from "react";
import styled from "styled-components";

const StyledBio = styled.p`
  font-size: 0.7rem;
  cursor: pointer;

  &:hover {
    text-shadow: 0px 0px 5px black;
  }
`;

class Bio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lectus lectus, maximus a magna sit amet, blandit aliquam risus. Suspendisse eleifend est id leo pulvinar tempor. Phasellus imperdiet eget neque quis fringilla. Sed pulvinar tellus at odio finibus, ac molestie dolor.",
      edit: false,
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleClick() {
    this.setState({edit: true});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      bio: e.target[0].value,
      edit: false,
    })

  }

  render() {
    if (this.state.edit) {
      return (
        <>
        <h4>ABOUT ME</h4>
        <StyledBio>
          <form onSubmit={this.handleSubmit}>
            <textarea defaultValue={this.state.bio} rows="5"></textarea>
            <button>UPDATE</button>
          </form>
        </StyledBio>
        </>
      )
    }

    return (
      <>
        <h4>ABOUT ME</h4>
        <StyledBio onClick={this.handleClick}>
          {this.state.bio}
        </StyledBio>
      </>
    );
  }
}

export default Bio;
