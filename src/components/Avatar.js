import { useState } from "react";
import { FaFileImage } from "react-icons/fa";
import profilePic from "../assets/avatar-square.jpg";
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
`;

const Avatar = () => {
  const [picture, setPicture] = useState(profilePic);
  const [edit, setEdit] = useState(false);

  function handleClick() {
    setEdit(true);
  }

  function handleChange(e) {
    let file = e.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (e) => {
      setPicture(reader.result);
      setEdit(false);
    };
  }

  const DisplayAvatar = () => {
    return (
      <StyledImg src={picture} alt="profile" onClick={handleClick}></StyledImg>
    );
  };

  const EditAvatar = () => {
    return (
      <label htmlFor="file-input">
        <FaFileImage className="upload-icon" />
        <input
          id="file-input"
          type="file"
          accept="image/png, image.jpg"
          onChange={handleChange}
        ></input>
        Upload profile image with square dimensions
      </label>
    );
  };

  return edit ? <EditAvatar /> : <DisplayAvatar />;
};

export default Avatar;
