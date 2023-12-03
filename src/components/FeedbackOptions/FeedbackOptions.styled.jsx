import styled from 'styled-components';

const ButtonsBox = styled.div`
  display: flex;
//   align-items: center;
//   justify-content: center;
  gap: 0px;
`

const Button = styled.button`
background: transparent;
  border-radius: 3px;
  border: 2px solid black;
  color: black;
  margin: 0 30px;
  padding: 0.25em 1em;
  cursor: pointer;
  text-transform: capitalize;

  &:hover {
    background: cornflowerblue;
    // border: #ffffff;
    color: #ffffff;
    font-weight: 500;
    
  }
`

// const ButtonGood = styled.button`

//   background: transparent;
//   border-radius: 3px;
//   border: 2px solid #006400;
//   color: #006400;
//   margin: 0 30px;
//   padding: 0.25em 1em;
//   cursor: pointer;

//   &:hover {
//     background: #006400;
//     // border: #ffffff;
//     color: #ffffff;
//   }
// `
// const ButtonNeutral = styled.button`
//   background: transparent;
//   border-radius: 3px;
//   border: 2px solid #daa520;
//   color: #daa520;
//   margin: 0 15px;
//   padding: 0.25em 1em;
//   cursor: pointer;
  
//   &:hover {
//     background: #daa520;
//     // border: #ffffff;
//     color: #ffffff;
//   }
// `
// const ButtonBad = styled.button`
//   background: transparent;
//   border-radius: 3px;
//   border: 2px solid #BF4F74;
//   color: #BF4F74;
//   margin: 0 30px;
//   padding: 0.25em 1em;
//   cursor: pointer;

//   &:hover {
//     background: #BF4F74;
//     // border: #ffffff;
//     color: #ffffff;
//   }
// `
export { ButtonsBox, Button};