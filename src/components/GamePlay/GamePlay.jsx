import React from 'react'
import TotalScore from '../TotalScore'
import NumberSelector from '../NumberSelector'
import Rules from '../rules'
import styled from 'styled-components'
import RoledDice from '../RoledDice'
import { useState } from 'react'

const GamePlay = () => {
  const [score,setScore] = useState(0);
  const [selectedNumber,setSelectedNumber] = useState();
  const [currentDice,setCurrentDice] = useState(1);
  const [error,setError] = useState();
  const [showRules,setShowRules] = useState(false);
  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
const roleDIce = () => {
  if(!selectedNumber){
    setError("You have not selected any number");
    return;
  }
  setError("");
  const randomNumber = generateRandomNumber(1,6);
  setCurrentDice((prev) => randomNumber);
  if (selectedNumber == randomNumber){
    setScore((prev) => prev + randomNumber)
  }
  else{
    setScore((prev) => prev - 2)
  }
  setSelectedNumber(undefined);
};

const resetScore = () =>{
  setScore(0);
};


  return (
    <MainCOntainer>
    <div className='top_section'>
      <TotalScore score = {score}/>
      <NumberSelector selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber} setError = {setError} error = {error}/>
    </div>
    <RoledDice currentDice={currentDice} roleDIce={roleDIce}/>
    <div className='btns'>
      <LineButton onClick={resetScore}>Reset Score</LineButton>
      <Button onClick={() => setShowRules((prev) => !prev)}>{showRules ? "Hide" : "Show"} Rules</Button>
    </div>
    {showRules && <Rules/>}
    </MainCOntainer>
  )
}

export default GamePlay;


const MainCOntainer = styled.div`

padding-top: 20px;
.top_section{
  display: flex;
  justify-content: space-between;
  align-items: end;
  padding: 0 95px;
}
@media (max-width: 800px) {
  width: 100vw;
  background-color: aliceblue;

  .top_section{
    display:flex;
    flex-direction:column;
    align-items:center;
  }
  
}


.btns {
  margin-top: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 15px;
  @media (max-width: 800px) {
    margin-top:10%;
    
  }

}
`;

const Button = styled.button`
font-weight:600;
color: white;
padding: 10px 18px;
background: #000000;
border-radius: 5px;
min-width: 220px;
border: 1px solid black;
cursor: pointer;
transition: 0.4s background ease-in;
&:hover{
  background-color: white;
  border: 1px solid black;
  color: black;
transition: 0.3s background ease-in;
}
`;
const LineButton = styled(Button)`
color: black;
background-color: white;
border: 1px solid black;

&:hover{
  background-color: black;
  border: 1px solid transparent;
  color: white;
}
`;



