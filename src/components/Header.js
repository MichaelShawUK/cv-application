import { useState } from "react";
import styled from "styled-components";

const StyledHeader = styled.div`
  cursor: pointer;
  &:hover {
    text-shadow: 0px 0px 5px black;
  }
`;

const Header = () => {
  const [name, setName] = useState("JOE Bloggs");
  const [title, setTitle] = useState("Web Developer");
  const [edit, setEdit] = useState(false);

  function handleClick() {
    setEdit(true);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setName(e.target[0].value);
    setTitle(e.target[1].value);

    if (e.target[0].value || e.target[1].value) setEdit(false);
    else setEdit(true);
  }

  const DisplayHeader = () => {
    return (
      <StyledHeader onClick={handleClick}>
        <h1>{name}</h1>
        <h3>{title}</h3>
      </StyledHeader>
    );
  };

  const EditHeader = () => {
    return (
      <StyledHeader id="header-input">
        <form onSubmit={handleSubmit}>
          <div className="grid-container">
            <input defaultValue={name} placeholder="Name"></input>
            <input defaultValue={title} placeholder="Profession"></input>
            <button>UPDATE</button>
          </div>
        </form>
      </StyledHeader>
    );
  };

  return edit ? <EditHeader /> : <DisplayHeader />;
};

export default Header;
