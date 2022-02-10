import React, {useEffect, useState} from 'react';
import styled from 'styled-components'
import {SliderData} from "../../SliderData";
import "./../../styles.css"
import firma from './../../images/Firma.svg'
import Form from "../Form/Form";
import {AiOutlineArrowRight} from "react-icons/all";
import {AiOutlineArrowLeft} from "react-icons/all";


const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;


  .slide {
    opacity: 0;
    transition: 2s ease;
  }

  .slide.active {
    opacity: 1;
    transition-duration: 2s;
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
    transition: 8s ease;
    transition-delay: 8s;

    &::before {
      content: '';
      width: ${(props) => `${props.progress}%`};
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
  //width: 100%;
  //height: 100%;
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

const ArrowLeft = styled.div`
  width: 52.64%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  outline: none;
  background: linear-gradient(to left, black 50%, white 50%);
  background-position: left bottom;
  background-size: 200% 100%;
  transition: all .3s ease-out;
  color: black;

  svg {
    height: 40%;
    width: auto;
  }

  &:hover {
    background-position: right bottom;
    color: white;
  }
`

const ArrowRight = styled.div`
  width: 47.36%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  outline: none;
  background: linear-gradient(to right, black 50%, white 50%);
  background-position: right bottom;
  background-size: 200% 100%;
  transition: all .3s ease-out;
  color: black;

  svg {
    height: 40%;
    width: auto;
  }

  &:hover {
    background-position: left bottom;
    color: white;
  }
`

const InsideWrapper = styled.div`
  width: 100vw;
  height: 80%;
  position: absolute;
  top: 90px;
  display: flex;
  align-items: end;
  justify-content: space-between;
  padding: 30px 175px;
  gap: 30px;

  @media (max-width: 1000px) {
    padding: 0 120px;
    //margin-top: 20px;
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

  @media (max-width: 1000px) {
    img {
      width: 70px;
    }

    font-size: 1.5rem;
  }
  @media (max-width: 820px) {

    img {
      width: 50px;
    }

    font-size: 1rem;
  }
`;


const Home = () => {
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0)
  const length = SliderData.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
    setProgress(0);
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  }

  useEffect(() => {
    setTimeout(() => {
      nextSlide();
      //setProgress(Math.floor(Math.random() * 100) + 1);

      // setInterval(() => setProgress(progress < 100 ? progress + 1 : 0), 100);
    }, 10000);

  }, [current]);

  // useEffect(() => {
  // //
  // //   // setInterval(() => {
  // //   //   if (progress%100 === 0) {
  // //   //     setProgress(0)
  // //   //   }
  // //   //   setProgress(progress + 1);
  // //   // }, 8000)
  // setInterval(() => {
  //   setProgress(progress + 10 );
  // }, 1000)
  //
  //   console.log(progress)
  // }, []);



  return (
    // <Hero>
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
        <ArrowLeft onClick={prevSlide}>
          {/*<img src={arrowLeft} alt="arrowLeft"/>*/}
          <AiOutlineArrowLeft/>
        </ArrowLeft>
        <ArrowRight onClick={nextSlide}>
          {/*<img src={arrowRight} alt="arrowRight"/>*/}
          <AiOutlineArrowRight/>
        </ArrowRight>

      </ArrowWrapper>

      <CountWrapper progress={progress}>
        {current + 1 < 10 ? `0${current + 1}` : current + 1}
        <div className="bar"/>
        {length < 10 ? `0${length}` : length}</CountWrapper>

    </Wrapper>
    // </Hero>
  )
}


export default Home;
