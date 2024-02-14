import styled from "styled-components";

const StartGame = ({toggle}) => {
  return (
    <Container>
      <div ><img className="main_img" src="/dices 1.png"/></div>
      <div className="content">
      <h1 className="m_text">DICE GAME</h1>
      <Button onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  )
}

export default StartGame;

const Container = styled.div`
@media (max-width: 550px){
  display:flex;
  justify-content:center;
  align-items: center;
  width: 100%;
  flex-direction: column;
  height: 100vh;
  
  .main_img{
    width:402px;
  }
  .content{
    margin-top:3%;
    display:flex;
    align-items:center;
    flex-direction:column;
    max-width:90%;
    gap:20px;
    h1{
      font-size: 56px;
    white-space: nowrap;

    }
  }
  
  .m_text{
  
    font-size:56px;
  }

}
@media (max-width: 820px){
  display:flex;
  justify-content:center;
  align-items: center;
  width: 100%;
  flex-direction: column;
  
  .main_img{
    width:402px;
  }
  .content{
    margin-top:3%;
    display:flex;
    align-items:center;
    flex-direction:column;
    max-width:90%;
    gap:20px;
    h1{
      font-size: 56px;
    white-space: nowrap;

    }
  }
}
max-width: 1180px;
height: 100vh;
display:flex;
margin: 0 auto;
align-items:center;


  h1{
    font-size: 96px; 
    white-space: nowrap;
  }
`;

const Button = styled.button`
font-weight: 700;
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
