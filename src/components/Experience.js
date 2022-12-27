import { Component } from "react";
import { FaMixer, FaRegPlusSquare } from "react-icons/fa";
import styled from "styled-components";

const StyledExperienceWrapper = styled.div`
  &:hover {
    text-shadow: 0 0 5px black;
    cursor: pointer;
  }
`
const StyledJobInput = styled.div`
  margin-bottom: 3px;
`

class PreviousJob extends Component {
  render() {
    return (
      <div className="previous-job">
        <div className="years-worked">
          {this.props.yearStart} - {this.props.yearEnd}
        </div>
        <div className="job-position">{this.props.jobPosition}</div>
        <span> <FaMixer className="arrow"/> </span>
        <div className="company-name">{this.props.companyName}</div>
        <div className="job-description">{this.props.jobDescription}</div>
      </div>
    );
  }
}

class JobInput extends Component {
  render() {
    return (
      <StyledJobInput>
        <div className="job-input-container">
          <input placeholder="Job Title"></input>
          <input placeholder="Company"></input>
          <input placeholder="Year Start"></input>
          <input placeholder="Year End"></input>
        </div>
        <textarea placeholder="Job Description"></textarea>
      </StyledJobInput>
    )
  }
}

class Experience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      experience: [
        {
          yearStart: "2020",
          yearEnd: "Present",
          jobPosition: "Full-stack developer",
          companyName: "Atom Inc",
          jobDescription: "Morbi quis risus ac urna lacinia placerat sit amet sed massa. Duis consequat, risus vitae tincidunt ullamcorper, massa odio ornare risus, quis aliquam justo purus eu dolor. In finibus ex."
        },
        {
          yearStart: "2018",
          yearEnd: "2020",
          jobPosition: "Front-end developer",
          companyName: "Carbon Ltd",
          jobDescription: "Duis sed rhoncus sem. Etiam tincidunt lectus vel aliquet tincidunt. Nulla facilisi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec.",
        },
        {
          yearStart: "2015",
          yearEnd: "2018",
          jobPosition: "IT Support",
          companyName: "Delta Industries",
          jobDescription: "Praesent ut feugiat magna. Sed pretium lorem ac est dapibus iaculis. Curabitur sed augue semper, dignissim elit eu, pharetra nibh. Donec vehicula.",
         
        }
      ],
      edit: false,
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleAddJobClick = this.handleAddJobClick.bind(this);
    this.handleUpdateJobClick = this.handleUpdateJobClick.bind(this);
  }

  handleClick() {
    this.setState({
      edit: true,
      experience: [null],
    });
  }

  handleAddJobClick() {
    this.setState({
      experience: this.state.experience.concat([null]),
    })
  }

  handleUpdateJobClick(e) {
    e.preventDefault();
    const newExperience = [];
    const prevJob = {};


    for (let i = 0; i < e.target.form.length - 1; i = i+5) {
      prevJob.jobPosition = e.target.form[i].value;
      prevJob.companyName = e.target.form[i + 1].value;
      prevJob.yearStart = e.target.form[i + 2].value;
      prevJob.yearEnd = e.target.form[i + 3].value;
      prevJob.jobDescription = e.target.form[i + 4].value;

      let target = Object.assign({}, prevJob);
      newExperience.push(target);
    }
    this.setState({
      experience: newExperience,
      edit: false,
    })
  }

  render() {
    if (this.state.edit) {
      return (
        <div>
          <form>
            <h4>EXPERIENCE</h4>
            {this.state.experience.map((job, index) => {
              return (
                <JobInput key={`job${index}`} />
              )
            })}
            <FaRegPlusSquare onClick={this.handleAddJobClick}/>
            <button onClick={this.handleUpdateJobClick}>UPDATE</button>
          </form>
        </div>
      )
    }


    return (
      <>
        <h4>EXPERIENCE</h4>
        <StyledExperienceWrapper onClick={this.handleClick}>
          {this.state.experience.map((job, index) => {
            return (
              <PreviousJob 
                yearStart={job.yearStart}
                yearEnd={job.yearEnd}
                jobPosition={job.jobPosition}
                companyName={job.companyName}
                jobDescription={job.jobDescription}
                key={`job${index}`}
              />
            )
          })}
        </StyledExperienceWrapper>
      </>
    );
  }
}

export default Experience;
