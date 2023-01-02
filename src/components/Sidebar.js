import Avatar from "./Avatar.js";
import Contact from "./Contact.js";
import Skills from "./Skills.js";
import styled from "styled-components";

const StyledSidebar = styled.div`
  font-size: 0.75rem;
  background-color: #222126;
  color: white;
  display: grid;
  grid-template-rows: 27% 33% 1fr;
`

const Sidebar = () => {
  return (
    <StyledSidebar>
      <Avatar />
      <Contact />
      <Skills />
    </StyledSidebar>
  )
}

export default Sidebar;