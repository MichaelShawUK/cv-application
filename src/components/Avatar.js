import { Component } from "react";
import { FaFileImage } from "react-icons/fa";
import profilePic from '../assets/avatar-square.jpg';
import styled from "styled-components";

const StyledImg = styled.img`
  border-radius: 20%;
  justify-self: center;
  align-self: center;
  width: 80%;
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 5px white;
  }
`

class Avatar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      picture: profilePic,
      edit: false,
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick() {
    this.setState({edit: true});
  }

  handleChange(e) {
    let file = e.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = e => {
      this.setState({
        picture: reader.result,
        edit: false
      })

    }
  }

  render() {
    if (this.state.edit) {
      return (
        <label htmlFor="file-input"><FaFileImage className="upload-icon"/>
          <input
            id="file-input"
            type="file"
            accept="image/png, image.jpg"
            onChange={this.handleChange}
          >
          </input>
          Upload profile image with square dimensions
        </label>
      )
    }


    return (
      <StyledImg 
        src={this.state.picture} 
        alt="profile" 
        onClick={this.handleClick}
      >
      </StyledImg>
    )
  }
}

export default Avatar;