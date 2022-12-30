import { Component } from "react";
import { FaCheck, FaRegPlusSquare } from "react-icons/fa";
import styled from "styled-components";

const StyledSkills = styled.div`
  padding-left: 10px;
  cursor: pointer;
  &:hover {
    text-shadow: 0 0 5px white;
  }
`

class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skills: [
        "HTML, CSS",
        "JavaScript",
        "ReactJS",
        "Git",
        "Linux",
      ],
      edit: false,
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleNewSkillClick = this.handleNewSkillClick.bind(this);
    this.handleUpdateClick = this.handleUpdateClick.bind(this);
  }

  handleClick() {
    this.setState({
      edit: true,
    });
  };

  handleNewSkillClick() {
    this.setState({
      skills: this.state.skills.concat([null]),
    })    
  };

  handleUpdateClick(e) {
    e.preventDefault();
    const newSkills = [];
    for (let i = 0; i < e.target.form.length - 1; i++) {
      let skill = e.target.form[i].value;
      if (skill) {
        newSkills.push(skill);
      }
    }
    if (newSkills[0]) {
      this.setState({
        skills: newSkills,
        edit: false,
      })
    } else {
      this.setState({
        skills: [null],
        edit: true,
      })
    }    
  }

  render() {
    const { skills, edit } = this.state;

    if (edit) {
      return (
        <StyledSkills>
          <h3>Skills</h3>
          <hr></hr>
          <form>
            <ul>
              {skills.map((skill, index) => {
                return (<li key={`input${index}`}>
                          <input
                          defaultValue={skill}
                          className="skill-input"></input>
                        </li>
                )
              })}
            </ul>
            <FaRegPlusSquare className="plus-btn" onClick={this.handleNewSkillClick}/>
            <button
              className="sidebar-btn"
              onClick={this.handleUpdateClick}>UPDATE</button>
          </form>
        </StyledSkills>
      )
    }

    return (
      <StyledSkills onClick={this.handleClick}>
        <h3>Skills</h3>
        <hr></hr>
        <ul>
          {skills.map((skill, index) => {
            return <li key={`skill${index}`}>
                    <FaCheck className="check-mark"/>{skill}
                  </li>
          })}
        </ul>
      </StyledSkills>
    )
  }
}

export default Skills;