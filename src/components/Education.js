import { useState } from "react";
import { FaMixer, FaRegPlusSquare } from "react-icons/fa";
import styled from "styled-components";

const StyledEducationWrapper = styled.div`
  &:hover {
    text-shadow: 0 0 5px black;
    cursor: pointer;
  }
`;

const Qualification = (props) => {
  const { year, achievement, institute, description } = props;
  return (
    <div className="qualification">
      <div>{year}</div>
      <div className="achievement">{achievement}</div>
      <span>
        {" "}
        <FaMixer className="arrow" />{" "}
      </span>
      <div className="institute">{institute}</div>
      <div>{description}</div>
    </div>
  );
};

const QualificationInput = (props) => {
  const { year, achievement, institute, description } = props;
  return (
    <div className="qual-input">
      <input defaultValue={year} placeholder="Year"></input>
      <input defaultValue={achievement} placeholder="Qualification"></input>
      <input defaultValue={institute} placeholder="Institute"></input>
      <textarea defaultValue={description} placeholder="Description"></textarea>
    </div>
  );
};

const Education = () => {
  const [education, setEducation] = useState([
    {
      year: "2019",
      achievement: "BSc Computer Science",
      institute: "Foo University",
      description:
        "Mauris tincidunt turpis lacus, id aliquam lacus consequat maximus. Proin pulvinar nunc sit amet commodo.",
    },
    {
      year: "2016",
      achievement: "Diploma",
      institute: "Acme College",
      description:
        "Maecenas sit amet mi lorem. Integer et odio commodo lectus ullamcorper convallis eu sit amet risus. Etiam est.",
    },
  ]);
  const [edit, setEdit] = useState(false);

  const emptyQualification = {
    year: "",
    achievement: "",
    institute: "",
    description: "",
  };

  function handleClick() {
    setEdit(true);
  }

  function handleAddQualification() {
    setEducation(education.concat([emptyQualification]));
  }

  function handleUpdateEducation(e) {
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

    const removeEmpty = newEducation.filter(
      (input) =>
        input.year || input.achievement || input.institute || input.description
    );

    setEducation(removeEmpty);
    if (removeEmpty.length === 0) {
      setEducation([emptyQualification]);
      setEdit(true);
    } else setEdit(false);
  }

  const DisplayEducation = () => {
    return (
      <>
        <h4>EDUCATION</h4>
        <StyledEducationWrapper onClick={handleClick}>
          {education.map((qualification, index) => {
            return (
              <Qualification
                year={qualification.year}
                achievement={qualification.achievement}
                institute={qualification.institute}
                description={qualification.description}
                key={`qualification${index}`}
              />
            );
          })}
        </StyledEducationWrapper>
      </>
    );
  };

  const EditQualification = () => {
    return (
      <>
        <h4>EDUCATION</h4>
        <form>
          {education.map((qualification, index) => {
            return (
              <QualificationInput
                year={qualification.year}
                achievement={qualification.achievement}
                institute={qualification.institute}
                description={qualification.description}
                key={`qualificationInput${index}`}
              />
            );
          })}
          <div className="flex">
            <FaRegPlusSquare
              onClick={handleAddQualification}
              className="plus-btn"
            />
            <button onClick={handleUpdateEducation}>UPDATE</button>
          </div>
        </form>
      </>
    );
  };

  return edit ? <EditQualification /> : <DisplayEducation />;
};

export default Education;
