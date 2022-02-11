import React from 'react';
import styled from 'styled-components'
import {Col, Container, Row} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {NewsData} from '../../ConstData';


const Wrapper = styled.div`
  width: 100vw;
  //min-height: 100vh;
  height: auto;
  display: flex;
  justify-content: center;
  padding: 140px 175px;

  .row {
    margin-bottom: 106px;
    display: flex;
    justify-content: center;
    h1{
      font-size: 65px;
    }
    //grid-gap: 106px;
  }

  .col {
    padding: 0;
  }

  .custom{
    display: flex;
    justify-content: center;
    
    @media(max-width: 768px){
      
      justify-content: center;
    }
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
      
      h1{
        font-size: 42px;
      }
    }
  }
`;

const Card = styled.div`
  max-width: 450px;
  width: 100%;
  height: auto;
  
  overflow: hidden;
  display: flex;
  flex-direction: column;
  
  .image{
    width: 100%;
    height: 334px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 33px;
    
    img {
    width: auto;
    height: 100%;
   
  }
    
  }
  span{
    margin-bottom: 15px;
  }
  
  h3{
    margin-bottom: 13px;
    width: auto;
    font-size: 28px;
    font-weight: bold;
  }
  
  .link{
    text-decoration: underline;
    cursor: pointer;
    width: fit-content;
    margin-bottom: 30px;
  }
  
  
`;


const Info = styled.div`
  
  width: 100%;
  height: auto;
`;


const News = () => (

  <Wrapper>
    <Container fluid="sm" style={{margin: 0, padding: 0, maxWidth: '100%'}}>
      <Row style={{textAlign: 'center'}}><h1 style={{fontWeight: 'bold', width: 'fit-content'}}>Aktualności</h1></Row>
      <Row>


      {NewsData.map((news, index) => (
        <Col className="custom" sm={12} md={4} key={index}>
          <Card>
            <div className="image">
              <img src={news.image} alt={index}/>
            </div>
            <span>{news.date}</span>
            <h3>{news.title}</h3>

            <div className="link">Więcej</div>

          </Card>
        </Col>
      ))}
    </Row>
    </Container>
  </Wrapper>

)

export default News;
