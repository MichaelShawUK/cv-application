import { useState } from "react";
import { FaMixer, FaRegPlusSquare } from "react-icons/fa";
import styled from "styled-components";

const StyledExperienceWrapper = styled.div`
  &:hover {
    text-shadow: 0 0 5px black;
    cursor: pointer;
  }
`;

const PreviousJob = (props) => {
  const { yearStart, yearEnd, jobPosition, companyName, jobDescription } =
    props;
  return (
    <div className="previous-job">
      <div className="years-worked">
        {yearStart} - {yearEnd}
      </div>
      <div className="job-position">{jobPosition}</div>
      <span>
        {" "}
        <FaMixer className="arrow" />{" "}
      </span>
      <div className="company-name">{companyName}</div>
      <div className="job-description">{jobDescription}</div>
    </div>
  );
};

const JobInput = (props) => {
  const { yearStart, yearEnd, jobPosition, companyName, jobDescription } =
    props;
  return (
    <div className="job-input">
      <input placeholder="Job Title" defaultValue={jobPosition}></input>
      <input placeholder="Company" defaultValue={companyName}></input>
      <input placeholder="Year Start" defaultValue={yearStart}></input>
      <input placeholder="Year End" defaultValue={yearEnd}></input>
      <textarea
        placeholder="Job Description"
        defaultValue={jobDescription}
      ></textarea>
    </div>
  );
};

const Experience = () => {
  const [experience, setExperience] = useState([
    {
      yearStart: "2020",
      yearEnd: "Present",
      jobPosition: "Full-stack developer",
      companyName: "Atom Inc",
      jobDescription:
        "Morbi quis risus ac urna lacinia placerat sit amet sed massa. Duis consequat, risus vitae tincidunt ullamcorper, massa odio ornare risus, quis aliquam justo purus eu dolor. In finibus ex.",
    },
    {
      yearStart: "2018",
      yearEnd: "2020",
      jobPosition: "Front-end developer",
      companyName: "Carbon Ltd",
      jobDescription:
        "Duis sed rhoncus sem. Etiam tincidunt lectus vel aliquet tincidunt. Nulla facilisi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec.",
    },
    {
      yearStart: "2015",
      yearEnd: "2018",
      jobPosition: "IT Support",
      companyName: "Delta Industries",
      jobDescription:
        "Praesent ut feugiat magna. Sed pretium lorem ac est dapibus iaculis. Curabitur sed augue semper, dignissim elit eu, pharetra nibh. Donec vehicula.",
    },
  ]);
  const [edit, setEdit] = useState(false);

  const emptyJob = {
    jobPosition: "",
    companyName: "",
    yearStart: "",
    yearEnd: "",
    jobDescription: "",
  };

  function handleClick() {
    setEdit(true);
  }

  function handleAddJob() {
    setExperience(experience.concat([emptyJob]));
  }

  function handleUpdateJob(e) {
    e.preventDefault();
    const newExperience = [];
    const prevJob = {};

    for (let i = 0; i < e.target.form.length - 1; i = i + 5) {
      prevJob.jobPosition = e.target.form[i].value;
      prevJob.companyName = e.target.form[i + 1].value;
      prevJob.yearStart = e.target.form[i + 2].value;
      prevJob.yearEnd = e.target.form[i + 3].value;
      prevJob.jobDescription = e.target.form[i + 4].value;

      let target = Object.assign({}, prevJob);
      newExperience.push(target);
    }

    const removeEmptyEntry = newExperience.filter(
      (job) =>
        job.jobPosition ||
        job.companyName ||
        job.yearStart ||
        job.yearEnd ||
        job.jobDescription
    );

    setExperience(removeEmptyEntry);

    if (removeEmptyEntry.length === 0) {
      setExperience([emptyJob]);
      setEdit(true);
    } else setEdit(false);
  }

  const DisplayExperience = () => {
    return (
      <>
        <h4>EXPERIENCE</h4>
        <StyledExperienceWrapper onClick={handleClick}>
          {experience.map((job, index) => {
            return (
              <PreviousJob
                yearStart={job.yearStart}
                yearEnd={job.yearEnd}
                jobPosition={job.jobPosition}
                companyName={job.companyName}
                jobDescription={job.jobDescription}
                key={`job${index}`}
              />
            );
          })}
        </StyledExperienceWrapper>
      </>
    );
  };

  const EditExperience = () => {
    return (
      <div>
        <form>
          <h4>EXPERIENCE</h4>
          {experience.map((job, index) => {
            return (
              <JobInput
                jobPosition={job.jobPosition}
                companyName={job.companyName}
                yearStart={job.yearStart}
                yearEnd={job.yearEnd}
                jobDescription={job.jobDescription}
                key={`job${index}`}
              />
            );
          })}
          <div className="flex">
            <FaRegPlusSquare onClick={handleAddJob} className="plus-btn" />
            <button onClick={handleUpdateJob}>UPDATE</button>
          </div>
        </form>
      </div>
    );
  };

  return edit ? <EditExperience /> : <DisplayExperience />;
};

export default Experience;
