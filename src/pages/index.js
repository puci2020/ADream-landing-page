import * as React from "react";
import {Suspense} from 'react';
import {Helmet} from 'react-helmet';
import styled from "styled-components";
import Loader from "../components/Loader/Loader";
import {LightgalleryProvider} from "react-lightgallery";
import "lightgallery.js/dist/css/lightgallery.css";
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import allReducers from './../state/reducers/store'

const Home = React.lazy(() => import('./../components/Home/Home'));
const Header = React.lazy(() => import("../components/Header/Header"));
const Sidebar = React.lazy(() => import( "../components/Sidebar/Sidebar"));
const Services = React.lazy(() => import("../components/Services/Services"));
const Features = React.lazy(() => import( "../components/Features/Features"));
const News = React.lazy(() => import( "../components/News/News"));
const Team = React.lazy(() => import( "../components/Team/Team"));
const Footer = React.lazy(() => import( "../components/Footer/Footer"));
const Gallery = React.lazy(() => import( "../components/Gallery/Gallery"));


const Main = styled.div`

`;

// markup
const IndexPage = () => {
  const isSSR = typeof window !== "undefined";
  const store = createStore(allReducers);

  return (
    <>
      {isSSR ? (
        <Suspense fallback={<Loader/>}>
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
                <Team/>
                <News/>
                <Gallery/>
                <Footer/>
              </Main>

            </Provider>
          </LightgalleryProvider>
        </Suspense>
      ) : ''}
    </>
  )
}

export default IndexPage
