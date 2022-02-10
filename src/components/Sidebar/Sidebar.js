import React from "react"
import styled from 'styled-components'
import {useSelector} from "react-redux";

const NavWrapper = styled.nav`
  .side {
    height: 100vh;
    background-color: #344353;
    box-shadow: 2px 0 5px rgba(0, 0, 0, .5);
    position: fixed;
    top: 0;
    left: 0;
    width: 70%;
    max-width: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: translateX(-100%);
    transition: transform .35s ease-in-out;
    z-index: 2;
  }

  .open {
    transform: translateX(0);
  }

  ul {
    list-style: none;
    display: flex;
    align-items: center;
    margin: 0;
    padding: 0 30px;
    height: auto;
    flex-direction: column;
  }

  li {
    padding: 25px 10px;
  }

  a {
    text-decoration: none;
    color: #FFFFFF;

    &:hover {
      color: #FDFF00;
      cursor: pointer;
    }
  }

`;

const Links = styled.div`
  position: absolute;
  width: auto;
  right: 10%;
`

const UL = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  margin: 0;

  li {
    padding: 30px 10px;


    text-decoration: none;
    color: white;

    &:hover {
      color: lightgray;
      cursor: pointer;
    }
    
  }

  @media (max-width: 1350px) {
    display: none;

  }
`;


const Sidebar = props => {

  const sidebar = useSelector((state) => state.sidebar);

  let drawerClasses = 'side';
  if (sidebar) {
    drawerClasses = 'side open'
  }

  return (
    <NavWrapper>
      <div className={drawerClasses}>
        <Links>
          <UL>
            <li>
              {/*<Link smooth to={'/'} scroll={el => el.scrollIntoView({behavior: 'smooth'})}*/}
              {/*      top="0">{t("link6.1")}</Link>*/}
              Poznaj przestrzeń
            </li>
            <li>
              Oferta
            </li>
            <li>
              Lokalizacja
            </li>
            <li>
              Własne biuro
            </li>
            <li>
              Kontakt
            </li>
          </UL>


        </Links>
      </div>
    </NavWrapper>

  );
};

export default Sidebar;
