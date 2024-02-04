import React, { useState } from 'react'
import styled from 'styled-components'
const RoledDice = ({currentDice,roleDIce}) => {
  
  return (
    <DiceContainer>
    <div className='dice' onClick={roleDIce}>
      <img src={`/dice_${currentDice}.png`} alt='dice image'/>
    </div>
    <p>Click on Dice to role</p>
    </DiceContainer>
  )
}

export default RoledDice

const DiceContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 36px;
@media (max-width: 800px) {
    margin-top:10%;
    
  }
.dice{
  cursor: pointer;
}
p{
  font-size: 20px;
}
`;

