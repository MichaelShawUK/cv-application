import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #ddd;
    font-family: Courier;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    margin: 5px 0;
  }

  .previous-job, .qualification {
    font-size: 0.7rem;
    margin: 10px 0;
  }

  .main h4 {
    margin-bottom: 10px;
  }

  .job-position, .company-name, .achievement, .institute {
    display: inline;
    font-weight: bold;
  }

  .arrow {
    position: relative;
    top: 2px;
  }

  #file-input {
    display: none;
  }

  .upload-icon {
    cursor: pointer;
    display: block;
    font-size: 4rem;
    margin: 40px auto 20px;
  }

  label {
    text-align: center;
    cursor: pointer;

    &:hover {
      text-shadow: 0 0 5px white;
    }
  }

  textarea {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 0.7rem;
    width: 100%;
    padding: 1px;
    display: block;
    resize: none;
  }

  #header-input {
    margin-top: 25px;
  }

  .grid-container {
    gap: 1px;
    justify-content: space-between;
    display: grid;
    grid-auto-flow: column;
    grid-template-areas:  "a ."
                          "b c"
  }

  .grid-container input {
    height: 25px;
  }

  .grid-container button {
    grid-area: c;
  }

  .check-mark {
    margin-right: 5px;
    position: relative;
    top: 1px;
  }

  .skill-input {
    width: 80%;
    font-size: 0.6rem;
    padding: 1px;
  }

  .qual-input {
    display: grid;
    grid-template-columns: 20% 40% 40%;
    gap: 1px;
    margin-top: 10px;
  }


  .qual-input textarea,
  .job-input textarea {
    grid-column: 1 / -1;
  }

  .job-input {
    display: grid;
    grid-template-columns: 50% 50%;
    gap: 1px;
    margin-top: 10px;
  }

  .job-input input,
  .job-input textarea,
  .qual-input input,
  .qual-input textarea {
    font-size: 0.7rem;
    padding: 1px;
  }

  button {
    font-size: 0.8rem;
    border: none;
    background-color: #cb2626;
    color: #fff;
    box-shadow: 0 0 5px black;
    padding: 3px 10px;
    font-weight: bold;
    cursor: pointer;
    margin: 2px 0;
    width: 100px;
    border-radius: 5px;

    &:hover {
    transform: scale(0.95);
    }
  }

  .sidebar-btn {
    box-shadow: 0 0 5px white;
    display: block;
    margin-top: 10px;
  }

  .flex {
    display: flex;
    justify-content: space-between;
  }

  .right {
    justify-content: flex-end;
  }

  .plus-btn {
    font-size: 1rem;
    height: 20px;
    cursor: pointer;
    &:hover {
      color: green;
    }
  }
`

export default GlobalStyle;