import React from 'react';
import styled from 'styled-components'
import logoADream from '../../images/logo_adream.svg'
import logo from '../../images/Logo.svg'
import {Col, Container, Row} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import squares from '../../images/squares_four.svg'

const Wrapper = styled.div`
  width: 100vw;
  height: auto;
  //height: 50vh;
  padding: 80px 175px;
  background-color: black;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;

  img {
    width: 250px;
    height: auto;
    padding: 0;
  }

  a {
    text-decoration: none;
    color: white;
  }

  .column {
    font-size: 16px;
  }

  .paragraph {
    margin-bottom: 15px;
  }
  .first{
    margin-bottom: 30px;
  }

  .contact {
    font-weight: bold;
    margin-bottom: 30px;
  }

  @media (max-width: 1000px) {
    padding: 100px 120px;
  }
  @media (max-width: 768px) {
    padding: 40px 40px;
  }
`;

const Copyright = styled.div`
  width: 100%;
  height: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;

  .right {
    height: 100%;
    display: flex;
    align-items: end;
    justify-content: start;

    img {
      height: 25px;
      width: auto;
    }

    span {
      height: fit-content;
      margin-right: 10px;

    }
  }
  
  @media(max-width: 722px){
    flex-direction: column;
  }
`;

const Squares = styled.div`
  width: 290px;
  height: auto;
  position: absolute;
  top: -26px;
  right: 175px;

  @media (max-width: 1000px) {
    display: none;
  }
`;

const Footer = () => (
  <Wrapper>
    <Squares><img src={squares} alt="squares_four"/></Squares>
    <Container fluid="sm" style={{margin: 0, padding: 0, maxWidth: '100%'}}>
      <Row style={{marginBottom: 56}}><img src={logo} alt="logo"/></Row>
      <Row>
        <Col className="column" sm={12} md={4}>
          <div className="paragraph first">ul. Towarowa 5/6 <br/> 31-000 Kraków</div>
          <div className="contact">+48 999 999 999 <br/>email@email.com</div>
        </Col>
        <Col sm={12} md={4}>
          <Row>
            <Col sm={12} md={6}>
              <div className="paragraph">Strona główna</div>
              <div className="paragraph">Poznaj przestrzeń</div>
              <div className="paragraph">Oferta</div>
            </Col>
            <Col sm={12} md={6}>
              <div className="paragraph">Lokalizacja</div>
              <div className="paragraph">Własne biuro</div>
              <div className="paragraph">Kontakt</div>
            </Col>
          </Row>
        </Col>
        <Col sm={12} md={4}/>
        {/*<Col sm={12} md={3}>f*/}
        {/*</Col>*/}
      </Row>
    </Container>
    <Copyright><a href="#">Polityka prywatności</a>
      <div className="right"><span>Proudly designed by</span> <img src={logoADream} alt="logoADream"/></div>
    </Copyright>

  </Wrapper>
)

export default Footer;
