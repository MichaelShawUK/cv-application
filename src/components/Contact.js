import { Component } from "react";
import { FaPhone, FaEnvelope, FaGlobe } from "react-icons/fa";
import styled from "styled-components";


const StyledContact = styled.div`
  padding-left: 10px;
`

class Contact extends Component {
  render() {
    return (
      <StyledContact>
        <h4><FaPhone /> Phone</h4>
        <p>01234 567890</p>
        <h4><FaEnvelope /> Email</h4>
        <p>username@example.com</p>
        <h4><FaGlobe /> Website</h4>
        <p>devsite.com</p>        
      </StyledContact>
    )
  }
}

export default Contact;