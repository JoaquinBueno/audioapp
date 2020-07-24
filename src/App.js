import React from 'react';
import {Navigation} from './components/navigation'
import {GlobalStyle} from './components/styles/globalStyle'
import {Home} from './pages/Home'
import {Explore} from './pages/Explore'
import {Router} from '@reach/router'
import {Groups} from './pages/Groups'
import {RegisteredUser} from './pages/RegisteredUser'


export const App =()=> {
  return (
    <>
      <GlobalStyle/>
      <Router>
        <Home path='/'/>
        <Explore path='/explore'/>
        <Groups path='/groups'/>
        <RegisteredUser path='/user' />
      </Router>
      <Navigation/>

    </>
  );
}

