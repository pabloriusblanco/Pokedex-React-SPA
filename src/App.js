import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PokeEntry from './PokeEntry';
import PokeLanding from './PokeLanding';


const App = () => (
  <Switch>
    <Route exact path="/" render={(props) => <PokeLanding {...props} />} />
    <Route
      exact
      path="/:pokemonId"
      render={(props) => <PokeEntry {...props} />}
    />
  </Switch>
);

export default App;
