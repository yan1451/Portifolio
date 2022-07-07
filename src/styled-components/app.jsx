import styled from "styled-components";
import imagemB from '../imagens/1.jpg';

const Div = styled.div`
  height: 99.65vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: auto;
  background-image: url(${imagemB});
  background-size: cover;
`;

const Title = styled.h1`
  font-size: 4em;
  text-align: center;
  color: palevioletred;
  border: solid 1px;
`;
 
const BoxImages = styled.div`
  height: 100vh;
  overflow: auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  border: solid 1px ;
  justify-content: space-around;
 
 `;

const Box = styled.div`
width: 100px;
height: 100px;
border: solid 1px;

&:hover{
transform: scale(1.5); 
}`;

const Img = styled.img`
max-width: 100px;
max-height: 100px;
border-radius: 20px;
border: solid 1px;

`;

const Section = styled.section`
  display: flex;
`;

const SectionSkills = styled.section`
  justify-content: center;
  display: grid;
  justify-items: center;  
  grid: repeat(3, 120px) / auto-flow 150px;
  
  @media (max-width: 600px) {
    grid: repeat(4, 120px) / auto-flow 150px;
  }

  @media (max-width: 400px) {
    grid: repeat(6, 120px) / auto-flow 150px;
  }

  @media (max-width: 200px) {
    grid: repeat(12, 120px) / auto-flow 150px;
  }
`;

const Span = styled.span`
  color: #c43636;
  font-size: 40px;
  text-shadow: 0px 14px 5px black;`;

const Header = styled.nav`
 position: fixed;
 margin: 15px 0 0 92%;
`;

const Button = styled.button`
  position: fixed;
  background: papayawhip;
  color: black;
  margin: 0 0 0 95%;
  padding: 5px;
  font-size: 13px;
  border-radius: 10%;
  text-decoration: none;
`;

export {
  BoxImages,
  Span,
  SectionSkills,
  Box,
  Div,
  Title,
  Header,
  Button,
  Section,
  Img,
}

