import React from 'react'
import styled from 'styled-components'
const rules = () => {
  return (
      <RuleContainer>
        <h2>How to play dice game</h2>
        <div className='text'>
        <p>Select any number</p>
        <p>Click on dice image</p>
        <p>after click on dice if selected number is equal to dice number you will get same point as dice{"  "}</p>
        <p>If you get wrong guess the 2 point will be deducted</p>
        </div>

      </RuleContainer>
  )
}

export default rules

const RuleContainer = styled.div`
background-color: #fbf1f1;
padding: 20px;
max-width: 800px;
margin: 0 auto;
margin-top: 25px;
border-radius: 10px;
h2{
  font-size: 20px;
}
.text{
  margin-top: 24px;

}

@media (max-width: 800px) {
  max-width:85%;
  .text{
    margin-top: 16px;
  }
}
`;
