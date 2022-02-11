import React from 'react';
import styled from 'styled-components'
import logo from '../../images/Logo.svg'
import {BsInstagram, FaFacebookF, HiMenu, HiMenuAlt3} from "react-icons/all";
import {useDispatch, useSelector} from "react-redux";
import toggleSidebar from "../../state/actions/sidebarActions";


const Wrapper = styled.nav`
  height: 67px;
  width: 100vw;
  position: absolute;
  top: 0;
  background-color: transparent;
  margin-top: 42px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;

  @media (max-width: 1000px) {
    margin-top: 20px;
  }
  @media (max-width: 820px) {
    padding: 0 20px;
  }
`;

const Logo = styled.div`
  width: 135px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  margin-left: 175px;

  img {
    width: 100%;
  }

  @media (max-width: 1000px) {
    width: 70px;
    margin-left: 120px;
  }
  @media (max-width: 820px) {
    width: 40px;
    margin-left: 10px;
  }
`;

const Links = styled.div`
  width: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 10px;

  ul {
    list-style: none;
    display: flex;
    align-items: center;
    padding: 0;
    font-size: 14px;
  }

  li {
    margin-right: 30px;

    .bar {
      width: 0;
      height: 1px;
      background-color: white;
      margin-top: 10px;
      transition: width 0.3s ease-in-out;
      position: relative;
    }

    &:hover {
      cursor: pointer;

      .bar {
        width: 100%;
        left: 50%;
        transform: translate(-50%, 0);
      }
    }
    
    @media(max-width: 1150px){
      display: none;
    }
    @media (max-width: 1000px) {
      margin-right: 20px;
    }
    @media (max-width: 820px) {
      margin-right: 10px;
    }
  }

`;

const Social = styled.div`
  width: auto;
  height: 100%;
  display: flex;
  align-items: center;
  margin-right: 175px;

  .box {
    width: 25px;
    height: 25px;
    background-color: white;
    margin: 5px;
    color: black;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .menu {
    color: white;
    background-color: transparent;
    margin-left: 30px;

    svg {
      width: 100%;
      height: 100%;
    }
    
    @media(min-width: 1150px){
      display: none;
    }
  }

  @media (max-width: 1000px) {
    margin-right: 120px;
  }
  @media (max-width: 820px) {
    margin-right: 10px;
  }
`;

const Header = () => {
  const dispatch = useDispatch();
  const sidebar = useSelector(state => state.sidebar);

  return (
    <Wrapper>
      <Logo><img src={logo}/></Logo>
      <Links>
        <ul>
          <li>
            Poznaj przestrzeń
            <div className="bar"/>
          </li>
          <li>
            Oferta
            <div className="bar"/>
          </li>
          <li>
            Lokalizacja
            <div className="bar"/>
          </li>
          <li>Własne biuro
            <div className="bar"/>
          </li>
          <li>
            Kontakt
            <div className="bar"/>
          </li>
        </ul>

      </Links>
      <Social>
        <div className="box">
          <FaFacebookF/>
        </div>
        <div className="box">
          <BsInstagram/>
        </div>
        <div className="box menu" onClick={() => dispatch(toggleSidebar())}>
          {sidebar ? <HiMenuAlt3/> :
            <HiMenu/>}

        </div>
      </Social>
    </Wrapper>
  )
}


export default Header;
