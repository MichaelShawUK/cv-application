import { useState } from "react";
import { FaCheck, FaRegPlusSquare } from "react-icons/fa";
import styled from "styled-components";

const StyledSkills = styled.div`
  padding-left: 10px;
  cursor: pointer;
  &:hover {
    text-shadow: 0 0 5px white;
  }
`;

const Skills = () => {
  const [skills, setSkills] = useState([
    "HTML, CSS",
    "JavaScript",
    "ReactJS",
    "Git",
    "Linux",
  ]);
  const [edit, setEdit] = useState(false);

  function handleClick() {
    setEdit(true);
  }

  function handleAddNewSkill() {
    setSkills(skills.concat([null]));
  }

  function handleUpdateSkills(e) {
    e.preventDefault();
    const newSkills = [];
    for (let i = 0; i < e.target.form.length - 1; i++) {
      let skill = e.target.form[i].value;
      if (skill) {
        newSkills.push(skill);
      }
    }
    if (newSkills[0]) {
      setSkills(newSkills);
      setEdit(false);
    } else {
      setSkills([null]);
      setEdit(true);
    }
  }

  const DisplaySkills = () => {
    return (
      <StyledSkills onClick={handleClick}>
        <h3>Skills</h3>
        <hr></hr>
        <ul>
          {skills.map((skill, index) => {
            return (
              <li key={`skill${index}`}>
                <FaCheck className="check-mark" />
                {skill}
              </li>
            );
          })}
        </ul>
      </StyledSkills>
    );
  };

  const EditSkills = () => {
    return (
      <StyledSkills>
        <h3>Skills</h3>
        <hr></hr>
        <form>
          <ul>
            {skills.map((skill, index) => {
              return (
                <li key={`input${index}`}>
                  <input defaultValue={skill} className="skill-input"></input>
                </li>
              );
            })}
          </ul>
          <FaRegPlusSquare className="plus-btn" onClick={handleAddNewSkill} />
          <button className="sidebar-btn" onClick={handleUpdateSkills}>
            UPDATE
          </button>
        </form>
      </StyledSkills>
    );
  };

  return edit ? <EditSkills /> : <DisplaySkills />;
};

export default Skills;