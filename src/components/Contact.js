import { useState } from "react";
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

const Contact = () => {
  const [phone, setPhone] = useState("01234 567890");
  const [email, setEmail] = useState("username@example.com");
  const [website, setWebsite] = useState("devsite.com");
  const [edit, setEdit] = useState(false);

  function handleClick() {
    setEdit(true);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setPhone(e.target[0].value);
    setEmail(e.target[1].value);
    setWebsite(e.target[2].value);
    setEdit(false);
  }

  const DisplayContact = () => {
    return (
      <StyledContact onClick={handleClick}>
        <h4><FaPhone /> Phone</h4>
        <p>{phone}</p>
        <h4><FaEnvelope /> Email</h4>
        <p>{email}</p>
        <h4><FaGlobe /> Website</h4>
        <p>{website}</p>        
      </StyledContact>
    )
  }

  const EditContact = () => {
    return (
      <StyledContact>
        <form onSubmit={handleSubmit}>
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
  
  return (edit ? <EditContact /> : <DisplayContact />);
}

export default Contact;