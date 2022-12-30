import { Component } from 'react';
import { FaMixer, FaRegPlusSquare } from "react-icons/fa";
import styled from 'styled-components';

const StyledEducationWrapper = styled.div`
  &:hover {
    text-shadow: 0 0 5px black;
    cursor: pointer;
  }
`

class Qualification extends Component {
  render() {
    return (
      <div className='qualification'>
        <div>{this.props.year}</div>
        <div className="achievement">{this.props.achievement}</div>
        <span> <FaMixer className="arrow"/> </span>
        <div className="institute">{this.props.institute}</div>
        <div>{this.props.description}</div>
      </div>
    )
  }
}

class QualificationInput extends Component {
  render() {
    return (
      <div className="qual-input">
        <input 
          defaultValue={this.props.year}
          placeholder="Year"></input>
        <input 
          defaultValue={this.props.achievement}
          placeholder="Qualification"></input>
        <input 
          defaultValue={this.props.institute}
          placeholder="Institute"></input>
        <textarea 
          defaultValue={this.props.description}
          placeholder="Description"></textarea>
      </div>
    )
  }
}

class Education extends Component {
  constructor(props) {
    super(props);
    this.state = {
      education: [
        {
          year: "2019",
          achievement: "BSc Computer Science",
          institute: "Foo University",
          description: "Mauris tincidunt turpis lacus, id aliquam lacus consequat maximus. Proin pulvinar nunc sit amet commodo.",
        },
        {
          year: "2016",
          achievement: "Diploma",
          institute: "Acme College",
          description: "Maecenas sit amet mi lorem. Integer et odio commodo lectus ullamcorper convallis eu sit amet risus. Etiam est.",
        }
      ],
      edit: false,
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleAddQualificationClick = this.handleAddQualificationClick.bind(this);
    this.handleUpdateEducationClick = this.handleUpdateEducationClick.bind(this);
  }

  handleClick() {
    this.setState({
      edit: true,
    });
  }

  handleAddQualificationClick() {
    const emptyQualification = {
      year: '',
      achievement: '',
      institute: '',
      description: '',
    }

    this.setState({
      education: this.state.education.concat([emptyQualification])
    })
  }

  handleUpdateEducationClick(e) {
    e.preventDefault();
    const newEducation = [];
    const qual = {};

    for (let i = 0; i < e.target.form.length - 1; i = i + 4) {
      qual.year = e.target.form[i].value;
      qual.achievement = e.target.form[i + 1].value;
      qual.institute = e.target.form[i + 2].value;
      qual.description = e.target.form[i + 3].value;

      let currentQual = Object.assign({}, qual);
      newEducation.push(currentQual);
    }

    const removeEmpty = newEducation.filter(input =>
      (input.year || input.achievement || input.institute || input.description)
    )

    const emptyQualification = {
      year: '',
      achievement: '',
      institute: '',
      description: '',
    }

    this.setState({education: removeEmpty});

    if (removeEmpty.length === 0) {
      this.setState({
        edit: true,
        education: [emptyQualification],
      })
    } else {
      this.setState({edit: false})
    }
  }

  render() {
    if (this.state.edit) {
      return (
        <>
          <h4>EDUCATION</h4>
            <form>      
              {this.state.education.map((qualification, index) => {
                return (
                  <QualificationInput
                    year={qualification.year}
                    achievement={qualification.achievement}
                    institute={qualification.institute}
                    description={qualification.description}
                    key={`qualificationInput${index}`}
                  />
                )
              })}
              <div className="flex">
                <FaRegPlusSquare 
                  onClick={this.handleAddQualificationClick}
                  className="plus-btn"
                />
                <button onClick={this.handleUpdateEducationClick}>UPDATE</button>
              </div>
          </form>
        </>
      )
    }

    return (
      <>
        <h4>EDUCATION</h4>
        <StyledEducationWrapper onClick={this.handleClick}>
          {this.state.education.map((qualification, index) => {
            return (
              <Qualification
                year={qualification.year}
                achievement={qualification.achievement}
                institute={qualification.institute}
                description={qualification.description}
                key={`qualification${index}`}
              />
            )
          })}
        </StyledEducationWrapper>
      </>
    )
  }
}

export default Education;