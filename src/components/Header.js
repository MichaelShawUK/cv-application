import { Component } from 'react';
import styled from 'styled-components';

const StyledHeader = styled.div`
  cursor: pointer;

  &:hover {
    text-shadow: 0px 0px 5px black;
  }
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
    e.preventDefault();
    this.setState({
      name: e.target[0].value,
      title: e.target[1].value,
    })

    if (e.target[0].value || e.target[1].value) {
      this.setState({edit: false});
    } else {
      this.setState({edit: true});
    }
  }

  render() {
    const { edit, name, title } = this.state;

    if (edit) {
      return (
        <StyledHeader id="header-input">
          <form onSubmit={this.handleSubmit}>
            <div className="grid-container">
              <input
                defaultValue={name}
                placeholder="Name"
              ></input>
              <input
                defaultValue={title}
                placeholder="Profession"
              ></input>
              <button>UPDATE</button>
            </div>
          </form>
        </StyledHeader>
      )
    }

    return (
      <StyledHeader onClick={() => this.handleClick()}>
        <h1>{name}</h1>
        <h3>{title}</h3>
      </StyledHeader>
    )
  }
}

export default Header;