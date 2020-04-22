import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SongForm from '../features/SongForm/components/SongForm';
import MusicPreferences from '../features/MusicPreferences/components/MusicPreferences';

const MainRoutes = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <SongForm />
      </Route>
      <Route path="/preferences">
        <MusicPreferences />
      </Route>
      <Route path="/songsBank">
        <div />
      </Route>
    </Switch>
  );
};

export default MainRoutes;
