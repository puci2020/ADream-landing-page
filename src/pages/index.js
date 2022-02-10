import * as React from "react"
import Home from './../components/Home/Home';
import styled from "styled-components";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import Services from "../components/Services/Services";

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import allReducers from './../state/reducers/store'

const Main = styled.div`

`;

// markup
const IndexPage = () => {
  const store = createStore(allReducers);

  return (
    <Provider store={store}>
    <Main>
      {/*<Hero>*/}
      <Sidebar/>
        <Home/>

      <Header/>
      {/*</Hero> */}
      <Services/>

    </Main>
    </Provider>
  )
}

export default IndexPage
