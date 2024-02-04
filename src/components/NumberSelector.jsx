import { useState } from "react";
import styled from "styled-components";



const NumberSelector = ({setError,error,selectedNumber,setSelectedNumber}) => {
  const arrNumber = [1,2,3,4,5,6];

  const NumberSelectorHandler = (value) => {
    setSelectedNumber(value)
    setError("")
  }




  return (
    <NumberSelectorContainer>
    <p className="error">{error}</p>
    <div className='flex'>
      {arrNumber.map((value,i) => (
        <Box
          isSelected = {value ==selectedNumber}
          key = {1}
          onClick = {() => NumberSelectorHandler(value)}
        >
        {value}
        </Box>
      ))}
    </div>
    <div>
    <p>Select Number</p>
    </div>
    </NumberSelectorContainer>
  )
}

export default NumberSelector

const NumberSelectorContainer = styled.div`

display: flex;
flex-direction: column;
align-items: end;
gap: 8px;

.error{
  color: red;
}
.flex{
  display: flex;
  gap: 24px;
}

p{
  font-size: 24px;
}

@media (max-width: 800px) {
  display:flex;
  justify-content:center;
flex-direction:column;
  align-items:center;
  gap:10px;

  .error{
    font-size:17px;
  }
  .flex{
    gap:16px;
  }
}
`;
const Box = styled.div`
  cursor: pointer;
  height: 65px;
  width: 65px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (!props.isSelected ? "black" : "white")};
  @media (max-width: 550px) {
  height:42px;
  width: 42px;  
}
`;
