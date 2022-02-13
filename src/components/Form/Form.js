import React from 'react';
import styled from 'styled-components'

const Wrapper = styled.div`
  max-width: 449px;
  //max-width: 40vw;
  width: auto;
  //max-height: 638px;
  //max-height: 33vw;
  height: auto;
  background-color: white;
  padding: 30px;
  
  .paragraph{
    color: gray;
    margin-bottom: 10px;
  }
  h3,h4{
    margin-bottom: 10px;
  }

  @media(min-width: 3000px){
    //max-width: 30vw;
    //max-height: 60vh;
    padding: 60px;
    
    h3{
      font-size: 60px;
      margin-bottom: 20px;
    }
    h4{
      font-size: 50px;
      margin-bottom: 20px;
    }
    .paragraph{
      font-size: 30px;
      margin-bottom: 20px;
    }
    //transform: scale(2);
    //margin-right: 175px;
  }
  @media(min-width: 3000px){
    max-width: 30vw;
  }
  @media (max-width: 1300px) {
    padding: 20px;
    .paragraph{
      margin-bottom: 10px;
    }
    h4,h3{
      margin-bottom: 10px;
    }
  }
  @media (max-width: 820px) {
    padding: 10px;
    .paragraph{
      margin-bottom: 5px;
    }
    h4,h3{
      margin-bottom: 5px;
    }
  }
`;

const Input = styled.input`
  height: 40px;
  width: 100%;
  border: 1px solid black;
  padding-left: 20px;
  margin-bottom: 10px;

  @media(min-width: 3000px){
    height: 80px;
    font-size: 30px;
    margin-bottom: 20px;
  }
  @media(max-width: 376px){
    height: 20px;
  }
`;

const Label = styled.label`
  display: flex;
  gap: 10px;
  font-size: 10px;
  margin-bottom: 10px;
  input[type="checkbox"]{
    width: 20px;
    height: 20px;
    
  }

  @media(min-width: 3000px){
    font-size: 20px;
    margin-bottom: 20px;
    input[type="checkbox"]{
      width: 40px;
      height: 40px;
    }
  }
`;

const Button = styled.button`
  width: 100%;
  height: 40px;
  font-weight: bold;
  letter-spacing: .2rem;
  border: none;
  color: white;
  background: linear-gradient(to right, #ffcc48 50%, black 50%);
  background-position: right bottom;
  background-size: 200% 100%;
 
  transition: all .5s ease-out;
  
  &:hover{
    background-position: left bottom;
    color: black;
    cursor: pointer;
  }
  @media(min-width: 3000px){
    height: 80px;
    font-size: 20px;
  }
  @media(max-width: 376px){
    height: 20px;
  }
`;

const Form = () => (
  <Wrapper>
    <h3>Lorem ipsum <br/>
      Lorem ipsum lorem ipsum</h3>
    <div className="paragraph">consectetur adipisicing elit. Ut auctor arcu</div>
    <h4>Zostaw kontakt, zadzwonimy do Ciebie</h4>
    <Input type="text" placeholder="Imię i nazwisko"/>
    <Input type="text" placeholder="Telefon"/>
    <Input type="email" placeholder="Email"/>
    <Input type="text" placeholder="Lorem ipsum lorem ipsum"/>
    <Label>
      <input type="checkbox"/>
      Wyrażam dobrowolną zgodę na przetwarzanie moich danych osobowych więce...
    </Label>
    <Button>Wyślij</Button>
  </Wrapper>
)

export default Form;
