import { Component } from "react";
import { FaMixer } from "react-icons/fa";

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

class Experience extends Component {
  render() {
    return (
      <>
        <h4>EXPERIENCE</h4>
        <PreviousJob
          yearStart="2020"
          yearEnd="Present"
          jobPosition="Full-stack developer"
          companyName="Atom Inc"
          jobDescription="Morbi quis risus ac urna lacinia placerat sit amet sed massa. Duis consequat, risus vitae tincidunt ullamcorper, massa odio ornare risus, quis aliquam justo purus eu dolor. In finibus ex."
        />
        <PreviousJob
          yearStart="2018"
          yearEnd="2020"
          jobPosition="Front-end developer"
          companyName="Carbon Ltd"
          jobDescription="Duis sed rhoncus sem. Etiam tincidunt lectus vel aliquet tincidunt. Nulla facilisi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec."
        />
        <PreviousJob
          yearStart="2015"
          yearEnd="2018"
          jobPosition="IT Support"
          companyName="Delta Industries"
          jobDescription="Praesent ut feugiat magna. Sed pretium lorem ac est dapibus iaculis. Curabitur sed augue semper, dignissim elit eu, pharetra nibh. Donec vehicula."
        />
      </>
    );
  }
}

export default Experience;
