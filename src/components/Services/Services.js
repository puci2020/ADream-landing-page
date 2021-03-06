import React from 'react';
import styled from 'styled-components'
import {Col, Container, Row} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import service1 from '../../images/service1.jpeg'
import service2 from '../../images/service2.jpeg'
import service3 from '../../images/service3.jpeg'
import service4 from '../../images/service4.jpeg'
import {AiOutlineArrowRight} from "react-icons/all";
import PhotoItem from '../PhotoItem/PhotoItem';
import {ArrowBox} from '../GlobalComponents/GlobalComponents'

const Wrapper = styled.div`
  width: 100vw;
  //min-height: 100vh;
  height: auto;
  display: flex;
  justify-content: center;
  padding: 140px 175px;

  .row {
    margin-bottom: 28px;
  }

  .col {
    padding: 0;
  }

  @media (max-width: 1000px) {
    padding: 100px 120px;
  }
  @media (max-width: 768px) {
    padding: 40px 40px;
    .col-md-6 {
      margin-bottom: 28px;
    }

    .row {
      margin-bottom: 0;
    }
  }
`;

const Card = styled.div`
  width: 100%;
  height: auto;
  overflow: hidden;
  background-color: rgba(255, 255, 255, 25%);
  position: relative;
  cursor: pointer;

  img {
    width: 100%;
    height: auto;
    transition: .5s;
    position: relative;
    z-index: -1;
  }

  .arrow {
    //max-width: 130px;
    //max-height: 130px;
    position: absolute;
    bottom: 0;
    right: 0;
  }

  &:hover {
    img {
      transform: scale(110%);
    }

    .arrow > div {
      background-position: left bottom;
      color: white;
      cursor: pointer;
    }
  }
`;


const Info = styled.div`
  max-width: 330px;
  width: auto;
  height: auto;
  background-color: white;
  padding: 35px 25px 25px 35px;
  position: absolute;
  top: ${(props) => (props.bottom ? '' : '29px')};
  bottom: ${(props) => (props.bottom ? '29px' : '')};
  left: 29px;
 

  .smallBox {
    width: 42px;
    height: 42px;
    background-color: #ffcc48;
    position: absolute;
    top: 25px;
    left: 25px;

    @media(max-width: 1200px){
      top: 5px;
      left: 5px;
    }

  }

  h3 {
    position: relative;
    font-weight: bold;
    
    @media(max-width: 1400px){
      font-size: 18px;
    }@media(max-width: 1200px){
      font-size: 14px;
    }
  }

  .line {
    width: 49px;
    height: 5px;
    background-color: black;
    position: relative;
    margin-bottom: 10px;
    margin-top: 25px;

    @media(max-width: 1200px){
      margin-bottom: 5px;
      margin-top: 10px;
    }
  }

  span {
    font-size: 18px;
    @media(max-width: 1400px){
      font-size: 10px;
    }@media(max-width: 1200px){
      font-size: 8px;
    }
  }

  @media(max-width: 1200px){
    padding: 15px 5px 5px 15px;
  }
`;


const Services = () => (

  <Wrapper>
    <Container fluid="sm" style={{margin: 0, padding: 0, maxWidth: '100%'}}>
      <Row>
        <Col sm={12} md={6}>
          <Card>
            <Info>
              <div className="smallBox"/>
              <h3>Biuro</h3>
              <div className="line"/>
              <span>od 1000z??/msc</span>
            </Info>
            <PhotoItem image={service1}/>
            <div className="arrow"><ArrowBox width='6.77vw' height='6.77vw' right><AiOutlineArrowRight/></ArrowBox></div>
          </Card>
        </Col>
        <Col sm={12} md={6}>
          <Card>
            <Info>
              <div className="smallBox"/>
              <h3>Lorem<br/>ipsum</h3>
              <div className="line"/>
              <span>od 500z??/msc</span>
            </Info>
            <PhotoItem image={service2}/>
            <div className="arrow"><ArrowBox width='6.77vw' height='6.77vw' right><AiOutlineArrowRight/></ArrowBox></div>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col sm={12} md={6}>
          <Card small>
            <Info bottom>
              <div className="smallBox"/>
              <h3>Biuro<br/>lorem</h3>
              <div className="line"/>
              <span>od 100z??/h</span>
            </Info>
            <PhotoItem image={service3}/>
            <div className="arrow"><ArrowBox width='6.77vw' height='6.77vw' right><AiOutlineArrowRight/></ArrowBox></div>
          </Card>
        </Col>
        <Col sm={12} md={6}>
          <Card small>
            <Info bottom>
              <div className="smallBox"/>
              <h3>Biuro lorem ipsum <br/>Lorem</h3>
              <div className="line"/>
              <span>od 100z??/h</span>
            </Info>
            <PhotoItem image={service4}/>
            <div className="arrow"><ArrowBox width='6.77vw' height='6.77vw' right><AiOutlineArrowRight/></ArrowBox></div>
          </Card>
        </Col>
      </Row>
    </Container>
  </Wrapper>

)

export default Services;
