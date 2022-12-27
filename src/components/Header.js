import { Component } from 'react';
import styled from 'styled-components';

const StyledHeader = styled.div`
  cursor: pointer;

  &:hover {
    text-shadow: 0px 0px 5px black;
  }
  /* background-color: #e9bd88ad; */
  /* color: #222126; */
  /* padding: 5px 40px 5px 10px; */
`

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "JOE Bloggs",
      title: "Web Developer",
      edit: false,
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleClick = () => {
    this.setState({
      edit: true,
    })
  }

  handleSubmit = (e) => {
    console.log(e);
    e.preventDefault();
    this.setState({
      name: e.target[0].value,
      title: e.target[1].value,
      edit: false,
    })
  }

  render() {
    if (this.state.edit) {
      return (
        <StyledHeader id="header-input">
          <form onSubmit={this.handleSubmit}>
            <input defaultValue={this.state.name}></input>
            <input defaultValue={this.state.title}></input>
            <button>UPDATE</button>
          </form>
        </StyledHeader>
      )
    }

    return (
      <StyledHeader onClick={() => this.handleClick()}>
        <h1>{this.state.name}</h1>
        <h3>{this.state.title}</h3>
      </StyledHeader>
    )
  }
}

export default Header;
