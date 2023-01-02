import Sidebar from './Sidebar';
import Main from './Main';
import styled from 'styled-components';

const StyledCv = styled.div`
  display: grid;
  grid-template-columns: 167px 333px;
  box-sizing: border-box;
  height: 707px;
  width: 500px;
  background-color: #fff;
  margin: 50px auto;
  box-shadow: 2px 10px 20px #222;
`

const Cv = () => {
  return (
    <StyledCv>
      <Sidebar />
      <Main />
    </StyledCv>
  )
}

export default Cv;