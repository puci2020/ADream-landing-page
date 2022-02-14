import React, {useEffect, useState} from 'react';
import styled from 'styled-components'
import {SliderData} from "../../ConstData";
import "./../../styles.css"
import firma from './../../images/Firma.svg'
import {AiOutlineArrowRight} from "react-icons/all";
import {AiOutlineArrowLeft} from "react-icons/all";
import {ArrowBox} from '../GlobalComponents/GlobalComponents'

const Form = React.lazy(() => import('../Form/Form'));

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  
  .slide {
    opacity: 0;
  }

  .slide.active {
    opacity: 1;
    transition: 2s ease-in-out;
    width: 100%;
    height: 100%;

    &::before {
      content: "";
      width: 100%;
      height: 100%;
      display: block;
      position: absolute;
      background-color: black;
      opacity: 27%;
    }
  }

`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const CountWrapper = styled.div`
  width: 15%;
  max-width: 305px;
  max-height: 118px;
  height: 12.53%;
  position: absolute;
  bottom: 0;
  left: 20vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;

  .bar {
    width: 60%;
    height: 5px;
    background-color: black;

    &::before {
      content: '';
      width: ${(props) => `${props.progress}%`};
      transition: width .1s ease;
      height: 100%;
      background-color: white;
      display: block;
    }
  }

  @media (max-width: 820px) {
    height: 50px;
    width: 25%;
  }
`;

const ArrowWrapper = styled.div`
  max-width: 305px;
  max-height: 118px;
  width: 15.89%;
  height: 12.53%;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: start;

  img {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 820px) {
    height: 50px;
  }
`;

const InsideWrapper = styled.div`
  width: 100vw;
  height: 80%;
  position: absolute;
  top: 90px;
  display: flex;
  align-items: end;
  justify-content: space-between;
  padding: 40px 175px;
  gap: 30px;

  @media (max-width: 1000px) {
    padding: 30px 120px;
  }
  
  @media (max-width: 820px) {
    padding: 0 40px;
    flex-direction: column;
    align-items: center;
    max-height: 50%;
  }
`;

const Title = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  font-size: 2rem;

  img {
    max-width: 176px;
  }
  @media(min-width: 2000px){
    font-size: 3rem;
  }
  @media (max-width: 1000px) {
    img {
      width: 70px;
    }

    font-size: 1.5rem;
  }
  @media (max-width: 820px) {
    font-size: 1rem;
    
    img {
      width: 50px;
    }
  }
`;


const Home = () => {
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);
  const length = SliderData.length;
  let interval = undefined;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
    setProgress(0);
    clearInterval(interval);
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
    setProgress(0);
    clearInterval(interval);
  }

  useEffect(() => {
    interval = setInterval(() => {
      setProgress((old) => old < 100 ? old + 1 : 0);
    }, 80);

  }, []);

  useEffect(() => {
    if(progress === 100){
      nextSlide();
    }
  }, [progress]);


  return (
    <Wrapper>
      {SliderData.map((image, index) => {
        return (
          <div className={index === current ? 'slide active' : 'slide'} key={index}>
            {index === current && (
              <Img width="100%" height="100%" key={index} src={image.image} alt={`background${index}`}/>
            )}
          </div>
        )
      })}

      <InsideWrapper>

        <Title>
          <img src={firma}/>
          Lorem ipsum dolor sit amet,<br/>
          consectetur adipiscing elit. Ut auctor
        </Title>
        <Form/>

      </InsideWrapper>

      <ArrowWrapper>
        <ArrowBox onClick={prevSlide} width='52.64%' height='100%'>
          <AiOutlineArrowLeft/>
        </ArrowBox>
        <ArrowBox onClick={nextSlide} width='47.36%' height='100%' right>
          <AiOutlineArrowRight/>
        </ArrowBox>
      </ArrowWrapper>

      <CountWrapper progress={progress}>
        {current + 1 < 10 ? `0${current + 1}` : current + 1}
        <div className="bar"/>
        {length < 10 ? `0${length}` : length}</CountWrapper>
    </Wrapper>
  )
}


export default Home;
