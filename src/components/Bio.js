import { useState } from "react";
import styled from "styled-components";

const StyledBio = styled.div`
  font-size: 0.7rem;
  cursor: pointer;

  &:hover {
    text-shadow: 0px 0px 5px black;
  }
`;

const Bio = () => {
  const [bio, setBio] = useState(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lectus lectus, maximus a magna sit amet, blandit aliquam risus. Suspendisse eleifend est id leo pulvinar tempor. Phasellus imperdiet eget neque quis fringilla. Sed pulvinar tellus at odio finibus, ac molestie dolor."
  );
  const [edit, setEdit] = useState(false);

  function handleClick() {
    setEdit(true);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setBio(e.target[0].value);
    if (e.target[0].value) setEdit(false);
    else setEdit(true);
  }

  const EditBio = () => {
    return (
      <>
        <h4>ABOUT ME</h4>
        <StyledBio>
          <form onSubmit={handleSubmit}>
            <textarea
              defaultValue={bio}
              placeholder="Brief Description"
              rows="5"
            ></textarea>
            <div className="flex right">
              <button>UPDATE</button>
            </div>
          </form>
        </StyledBio>
      </>
    );
  };

  const DisplayBio = () => {
    return (
      <>
        <h4>ABOUT ME</h4>
        <StyledBio onClick={handleClick}>{bio}</StyledBio>
      </>
    );
  };

  return edit ? <EditBio /> : <DisplayBio />;
};

export default Bio;
