import React from 'react';
import styled from 'styled-components'
import {Col, Container, Row} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {IconsData} from "../../ConstData";
import {AiOutlineArrowRight} from "react-icons/all";

const Wrapper = styled.div`
  width: 100vw;
  //min-height: 100vh;
  height: auto;
  display: flex;
  justify-content: center;
  padding: 0 175px 140px 175px;

  .row {
    margin-bottom: 28px;
  }

  //.col-md-3, .col-sm-12 {
  .custom {
    padding: 0;
    margin-bottom: 120px;
  }

  @media (max-width: 1000px) {
    padding: 0 120px 100px 120px;
  }
  @media (max-width: 768px) {
    padding: 0 40px 40px 40px;
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
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 0 50px;

  .icon{
    width: 100%;
    height: 70%;
    display: flex;
    align-items: end;
    justify-content: start;
    margin-bottom: 44px;
  }
  
  .text{
    width: 100%;
    height: 30%;
  }
  
  //img{
  //  margin-bottom: 44px;
  //}
  
  span{
    font-size: 28px;
    
  }
  
  h1{
    font-size: 48px;
    font-weight: bold;
  }
`;

const Bar = styled.div`
  width: 100%;
  max-width: 130px;
  height: 10px;
  background-color: black;
  margin-top: 36px;
`;

const Button = styled.button`
  width: 380px;
  height: 78px;
  font-weight: bold;
  letter-spacing: .2rem;
  border: none;
  color: white;
  background: linear-gradient(to right, #ffcc48 50%, black 50%);
  background-position: right bottom;
  background-size: 220% 100%;
  transition: all .5s ease-out;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 !important;
  
  span{
    margin-left: 20px;
    width: 80%;
  }
  .arrow{
    width: 20%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: black !important;
  }
  svg{
    margin: 0 20px;
    color: white;
    height: 60%;
    width: auto;
  }
  &:hover{
    background-position: left bottom;
    color: black;
    cursor: pointer;
    
  }
`;

const Features = () => (
  <Wrapper>
    <Container fluid="sm" style={{margin: 0, padding: 0, maxWidth: '100%'}}>

      <Row>
        <Col className="custom" sm={12} md={3}>
          <Card>
           <h1>Lorem <br/>
            ipsum<br/>
             dolor sit<br/>
             amet,<br/>
             conse
           </h1>
            <Bar/>
          </Card>
        </Col>
        {IconsData.map((icon, index) => (
          <Col className="custom" sm={12} md={3} key={index}>
            <Card>
              <div className="icon">
              <img src={icon.icon} alt={index}/>
              </div>
              <div className="text">
              <span>{icon.text}</span>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
      <Row style={{paddingTop: 40}}>
        <Button style={{width: 380}}><span>DOWIEDZ SIĘ WIĘCEJ</span> <div className="arrow"><AiOutlineArrowRight/></div></Button>
      </Row>
    </Container>
  </Wrapper>
)

export default Features;
