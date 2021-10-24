import React, { useState } from "react";
import MainContext from './ContextAPIs/ContextAPI';

import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage/LandingPage";
import Dashboard from "./Pages/Dashboard/Dashboard";
let defaultValue = {
  user:{},
  isLoggedIn:false
}
function App() {
  
  let [appState,setAppState] = useState(defaultValue)
  let Actions = {
    appState,
    setAppState
  }
  return (
    <MainContext.Provider value={Actions}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/home" exact component={Dashboard} />
        </Switch>
      </BrowserRouter>
    </MainContext.Provider>
  );
}

export default App;
