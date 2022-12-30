import { Component } from "react";
import { FaPhone, FaEnvelope, FaGlobe } from "react-icons/fa";
import styled from "styled-components";


const StyledContact = styled.div`
  padding-left: 10px;
  cursor: pointer;

  &:hover {
    text-shadow: 0 0 5px white;
  }
`

const StyledInput = styled.input`
  font-size: 0.6rem;
  padding: 1px 0;
  width: 80%;
`

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phone: "01234 567890",
      email: "username@example.com",
      website: "devsite.com",
      edit: false,
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleClick() {
    this.setState({edit: true});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      phone: e.target[0].value,
      email: e.target[1].value,
      website: e.target[2].value,
      edit: false,
    })
  }

  render() {
    const {edit, email, phone, website} = this.state;
    
    if (edit) {
      return (
        <StyledContact>
          <form onSubmit={this.handleSubmit}>
            <h4><FaPhone /> Phone</h4>
            <StyledInput defaultValue={phone}></StyledInput>
            <h4><FaEnvelope /> Email</h4>
            <StyledInput defaultValue={email}></StyledInput>
            <h4><FaGlobe /> Website</h4>
            <StyledInput defaultValue={website}></StyledInput>
            <button className="sidebar-btn">UPDATE</button>
          </form>
        </StyledContact>
      )
    }

    return (
      <StyledContact onClick={this.handleClick}>
        <h4><FaPhone /> Phone</h4>
        <p>{phone}</p>
        <h4><FaEnvelope /> Email</h4>
        <p>{email}</p>
        <h4><FaGlobe /> Website</h4>
        <p>{website}</p>        
      </StyledContact>
    )
  }
}

export default Contact;