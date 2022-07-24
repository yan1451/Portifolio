import styled from "styled-components";
import imagemB from '../imagens/1.jpg';
import { Menu } from "styled-icons/material";
import { KeyboardArrowDown } from 'styled-icons/material-outlined';

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
  font-size: 3em;
  text-align: center;
  color: palevioletred;
`;

const BoxImages = styled.div`
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  overflow: auto;
 
 `;

const Box = styled.div`
width: 80px;
height: 80px;

&:hover{
transform: scale(1.5);
}`;

const Img = styled.img`
max-width: 80px;
max-height: 80px;
border-radius: 10px;
`;

const Section = styled.section`
  display: flex;
`;

const SectionSkills = styled.section`
  justify-content: center;
  display: grid;
  justify-items: center;  
  grid: repeat(3, 100px) / auto-flow 110px;
  
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
  text-shadow: 0px 14px 5px black;
`;

const Header = styled.nav`
 position: fixed;
 right: 8px;
 top: 20px;
`;

const Button = styled(Menu)`
position: fixed;
color: #f4efef;
right: 32px;
max-width: 30px;
border-radius: 50%;
border: solid 1px;

`;

const Arrow = styled(KeyboardArrowDown)`
  max-width: 30px;
  position: absolute;
  bottom: 20px;
  animation: anima-seta 1000ms ease infinite;

  @keyframes anima-seta {
    to {
        opacity:1;
        transform: translateY(18px);
    }
  }
`;

const Li = styled.li`
  list-style-type: none;
>* {
  text-decoration: none;
  color: gray;
  font-size: 14px;
}

`;

const Projetos = styled.section`
display: flex;
height: 100vh;
border: solid 1px;
flex-direction: column;
align-items: center;

`;

const CardBox = styled.div`
border: solid 1px;
display: flex;
max-width: 900px;
flex-wrap: wrap;
align-items: center;
justify-content: space-between;
`;

const Cards = styled.div`
width: 400px;
height: 400px;
margin: 10px;
border: solid 1px;
`;

export {
  CardBox,
  Cards,
  Projetos,
  Arrow,
  Li,
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

