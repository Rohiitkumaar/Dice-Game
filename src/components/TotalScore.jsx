import styled from "styled-components"

const TotalScore = ({score}) => {
  return (
    <ScoreCOntainer>
    <h1>{score}</h1>
    <p>Total Score</p>
    </ScoreCOntainer>
  )
}

export default TotalScore;

const ScoreCOntainer = styled.div`

  text-align: center;
  max-width: 200px;
h1{
  font-size: 100px;
  line-height:75px;
}

p{
  font-size: 24px;
  font-weight: 500;
}

@media (max-width: 800px) {
  display:flex;
  flex-direction: row-reverse;
  white-space:nowrap;
  align-items:center;
  gap:25px;
  h1{
    font-size:24px;
  }

  
}
`;
