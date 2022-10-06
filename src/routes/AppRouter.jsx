import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {WomenScreen} from '../pages/WomenScreen';
import {MenScreen} from '../pages/MenScreen';
import {SearchScreen} from '../pages/SearchScreen';
import {CharacterScreen} from '../pages/CharacterScreen';
import {Navbar} from '../components/Navbar';


const AppRouter = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/men" component={MenScreen} />
        <Route exact path="/women" component={WomenScreen} />
        <Route exact path="/search" component={SearchScreen} />
        <Route exact path="/character/:id" component={CharacterScreen} />
      </Switch>
    </>
  )
}

export default AppRouter;