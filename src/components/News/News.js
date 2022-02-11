// import React from 'react';
// import styled from 'styled-components'
// import {Col, Container, Row} from "react-bootstrap";
// import 'bootstrap/dist/css/bootstrap.min.css';
//
// const Wrapper = styled.div`
//   width: 100vw;
//   //min-height: 100vh;
//   height: auto;
//   display: flex;
//   justify-content: center;
//   padding: 0 175px 140px 175px;
//
//   .row {
//     margin-bottom: 28px;
//
//
//   }
//
//   //.col-md-3, .col-sm-12 {
//   .custom {
//     padding: 0;
//     margin-bottom: 120px;
//
//     &:nth-child(3n) > div{
//       padding-right: 0;
//     }
//
//   }
//
//
//   @media (max-width: 1000px) {
//     padding: 0 120px 100px 120px;
//   }
//   @media (max-width: 768px) {
//     padding: 0 40px 40px 40px;
//     .col-md-6 {
//       margin-bottom: 28px;
//     }
//
//     .row {
//       margin-bottom: 0;
//     }
//   }
// `;
//
// const Card = styled.div`
//   width: 100%;
//   height: 100%;
//   display: flex;
//   flex-direction: column;
//   align-items: start;
//   padding-right: 100px;
//
//
//   .icon {
//     width: 100%;
//     height: 70%;
//     display: flex;
//     align-items: end;
//     justify-content: start;
//     margin-bottom: 44px;
//   }
//
//   .text {
//     width: 100%;
//     height: 30%;
//   }
//
//   span {
//     font-size: 28px;
//   }
//
//   h1 {
//     font-size: 48px;
//     font-weight: bold;
//   }
// `;
//
// const News = () => (
//   <Wrapper>
//     <Container fluid="sm" style={{margin: 0, padding: 0, maxWidth: '100%'}}>
//       <Row>
//         <h1>Aktualności</h1>
//       </Row>
//       <Row>
//         {IconsData.map((icon, index) => (
//           <Col className="custom" sm={12} md={4} key={index}>
//             <Card>
//               <div className="icon">
//                 <img src={icon.icon} alt={index}/>
//               </div>
//               <div className="text">
//                 <span>{icon.text}</span>
//               </div>
//             </Card>
//           </Col>
//         ))}
//       </Row>
//
//     </Container>
//   </Wrapper>
// )
//
// export default News;
