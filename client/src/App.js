import React from 'react';

import './App.css';
import { Router } from '@reach/router';
import Main from './views/Main';
import NewPet from './views/NewPet';
import Update from './views/Update'
import Detail from './views/Detail'

function App() {
  return (
    <div className="App">
      <Router>
        <Main path="pets/"/>
        <NewPet path="pet/"/>
        <Update path="pets/:id/edit"/>
        <Detail path="pet/:id"/>

      </Router>
      
    </div>
  );
}

export default App;
