import React from 'react';
import styled from 'styled-components'
import gallery1 from '../../images/gallery1.jpeg';
import gallery2 from '../../images/gallery2.jpeg';
import gallery3 from '../../images/gallery3.jpeg';
import gallery4 from '../../images/gallery4.jpeg';
import PhotoItem from '../PhotoItem/PhotoItem';
import {AiOutlineArrowRight} from "react-icons/all";
import {AiOutlineArrowLeft} from "react-icons/all";
import {ArrowBox} from '../GlobalComponents/GlobalComponents'

const Wrapper = styled.div`
  width: 100vw;
  height: auto;
  position: relative;
  margin-bottom: 170px;
  overflow-x: auto;

  h1 {
    font-size: 65px;
    font-weight: bold;
    position: absolute;
    right: 0;
    top: 5%;
    margin-right: 175px;
    z-index: 1;


    @media (max-width: 1000px) {
      margin-right: 120px;
      font-size: 46px;
    }
    @media (max-width: 768px) {
      margin-right: 40px;
      font-size: 26px;
    }
  }

`;


const Bar = styled.div`
  width: 450px;
  max-width: 40%;
  height: 20px;
  background-color: black;
  position: absolute;
  right: 0;
  //top: 70%;
  top: 20%;
  z-index: 1;
  margin-right: 175px;


  @media (max-width: 1000px) {
    margin-right: 120px;
    height: 10px;
  }
  @media (max-width: 768px) {
    margin-right: 40px;
    height: 5px;
  }
`;

const Images = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: auto;
  grid-gap: 30px;
  grid-auto-flow: dense;


  .custom {
    width: auto;
    height: 100%;
    position: relative;
    display: flex;
    align-items: end;
  }

  .zoom {
    overflow: hidden;

    img {
      transition: transform .5s ease-out;

      &:hover {
        transform: scale(110%);
      }

    }
  }

  .item {
    width: auto;
    height: 100%;
    cursor: pointer;

    div {
      width: 100%;
      height: 100%;
    }
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 50% 50%;
  }

  .w-1 {
    grid-column: span 1;
  }

  .w-2 {
    grid-column: span 2;
  }

  .h-1 {
    grid-row: span 1;
  }

  .h-2 {
    grid-row: span 2;
  }

  @media (max-width: 1000px) {
    grid-gap: 10px;
  }
  @media (max-width: 768px) {
    grid-gap: 5px;
  }
`;

const ArrowRight = styled.div`
  position: absolute;
  right: 10px;
  top: 45%;
  z-index: 1;
`;

const ArrowLeft = styled.div`
  position: absolute;
  left: 10px;
  top: 45%;
  z-index: 1;
`;

const Gallery = () => (
  <Wrapper>
    <h1>Galeria</h1>
    <Bar/>
    <ArrowLeft><ArrowBox width='6.77vw' height='6.77vw'><AiOutlineArrowLeft/></ArrowBox></ArrowLeft>
    <ArrowRight><ArrowBox width='6.77vw' height='6.77vw' right><AiOutlineArrowRight/></ArrowBox></ArrowRight>
    <Images>
      <div className="gallery-item h-2 zoom">
        <div className="item">
          {/*<img src={gallery1} alt="gallery1"/>*/}
          <PhotoItem image={gallery1} group="b"/>
        </div>
      </div>
      <div className="gallery-item w-2 h-1 zoom">
        <div className="item">
          <PhotoItem image={gallery3} group="b"/>
        </div>
      </div>
      <div className="gallery-item w-2 h-1 zoom">
        <div className="item">
          <PhotoItem image={gallery2} group="b"/>
        </div>
      </div>
      <div className="gallery-item custom h-2 zoom">
        <div className="item" style={{height: '50%'}}>
          <PhotoItem image={gallery4} group="b"/>
        </div>
      </div>

    </Images>
  </Wrapper>
)

export default Gallery;
