import Typewriter from 'typewriter-effect';
import { useIndex } from './Hooks/navBar';
import { Button, Title, Header, SectionSkills, Div, Img, Section, Box, Span, BoxImages } from './styled-components/app';


function App() {
  const { dropDownRef, onClick, isActive } = useIndex();

  return (
    <>
      <Button onClick={onClick}> Menu </Button>
      {isActive &&
        <Header ref={dropDownRef} id={'nav'}>
          <ul>
            <li> <a href='#home'> Home </a> </li>
            <li> <a href='#skills'> Skills </a> </li>
            <li> <a href='#contato'> Contato </a> </li>
            <li> <a href='#nav'> Sobre </a> </li>
          </ul>
        </Header>}
      <Div id='home'>
        <Section>
          <Span >
            <Typewriter
              onInit={(typewriter) => {
                typewriter.typeString('Hello World!')
                  .start()
              }} />
          </Span>
        </Section>
      </Div>
      <BoxImages>
        <Title id={'skills'}> Tecnologias Adquiridas </Title>
        <SectionSkills id={'skills'}>
          <Box><Img src='https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg' alt='typescript' /></Box>
          <Box><Img src='https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg' alt='react' /></Box>
          <Box><Img src='https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg' alt='bootStrap' /></Box>
          <Box><Img src='https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg' alt='JavaScript' /></Box>
          <Box><Img src='https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg' alt='CSS3' /></Box>
          <Box><Img src='https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg' alt='HTML5' /></Box>
          <Box><Img src='https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original-wordmark.svg' alt='Python' /></Box>
          <Box><Img src='https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original-wordmark.svg' alt='github' /></Box>
          <Box><Img src='https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg' alt='MySql' /></Box>
          <Box><Img src='https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg' alt='PortGreSql' /></Box>
          <Box><Img src='https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg' alt='MongoDB' /></Box>
          <Box><Img src='https://styled-components.com/atom.png' alt='styledComponents' /></Box>
        </SectionSkills>
      </BoxImages>
    </>
  );
}

export default App;
