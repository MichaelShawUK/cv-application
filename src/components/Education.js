import { Component } from 'react';
import { FaMixer } from "react-icons/fa";


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

class Education extends Component {
  render() {
    return (
      <>
        <h4>EDUCATION</h4>
        <Qualification 
          year="2019"
          achievement="BSc Computer Science"
          institute="Foo University"
          description="Mauris tincidunt turpis lacus, id aliquam lacus consequat maximus. Proin pulvinar nunc sit amet commodo."
        />
        <Qualification 
          year="2016"
          achievement="Diploma"
          institute="Acme College"
          description="Maecenas sit amet mi lorem. Integer et odio commodo lectus ullamcorper convallis eu sit amet risus. Etiam est."
        />
      </>
    )
  }
}

export default Education;
