import * as React from "react";
import {Helmet} from 'react-helmet';
import Home from './../components/Home/Home';
import styled from "styled-components";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import Services from "../components/Services/Services";
import Features from "../components/Features/Features";
import News from "../components/News/News";

import { LightgalleryProvider } from "react-lightgallery";
import "lightgallery.js/dist/css/lightgallery.css";

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import allReducers from './../state/reducers/store'

const Main = styled.div`

`;

// markup
const IndexPage = () => {
  const store = createStore(allReducers);

  return (
    <LightgalleryProvider>
      <Provider store={store}>

        <Helmet>
          <meta charSet="utf-8"/>
          <title>Pixel Perfect</title>
        </Helmet>
        <Main>
          {/*<Hero>*/}
          <Sidebar/>
          <Home/>

          <Header/>
          {/*</Hero> */}
          <Services/>
          <Features/>
          <News/>
        </Main>

      </Provider>
    </LightgalleryProvider>
  )
}

export default IndexPage
