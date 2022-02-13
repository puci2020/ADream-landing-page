import React from 'react';
import styled from 'styled-components';
import people from '../../images/people.png';
import squares_small from '../../images/squares_two.svg';
import {Col, Container, Row} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const Wrapper = styled.div`
  width: 100vw;
  height: auto;
  display: flex;
  justify-content: end;
  padding: 140px 0 140px 175px;
  position: relative;

  h1 {
    font-size: 65px;
    font-weight: bold;
    position: absolute;
    left: 0;
    top: 30%;
    margin-left: 175px;
    z-index: 1;
  }

  @media (max-width: 1000px) {
    padding: 100px 0 100px 120px;
    
    h1{
      margin-left: 120px;
      font-size: 46px;
    }
  }
  @media (max-width: 768px) {
    padding: 40px 0 40px 40px;

    h1{
      margin-left: 40px;
      font-size: 26px;
    }
  }
`;

const Bar = styled.div`
  width: 610px;
  max-width: 40%;
  height: 20px;
  background-color: black;
  position: absolute;
  left: 0;
  bottom: 25%;
  z-index: 1;
  margin-left: 175px;


  @media (max-width: 1000px) {
    margin-left: 120px;
    height: 10px;
  }
  @media (max-width: 768px) {
    margin-left: 40px;
    height: 5px;
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  right: 0;
  padding-left: 175px;

  img {
    width: 100%;
    height: auto;
  }
  
  @media (max-width: 1000px) {
    padding-left: 120px;
  }
  @media (max-width: 768px) {
    padding-left: 40px;
  }
`;

const Squares = styled.div`
  width: 290px;
  height: auto;
  position: absolute;
  top: 70px;
  right: 175px;

  @media (max-width: 1000px) {
    display: none;
  }
`;

const Team = () => (
  <Wrapper>
    <h1>Lorem ipsum <br/>vs własne biuro</h1>
    <Bar/>
    <ImageWrapper>

      <img src={people} alt="people"/>
    </ImageWrapper>
    <Squares>
      <img src={squares_small} alt="squares"/>
    </Squares>
  </Wrapper>
)

export default Team;
