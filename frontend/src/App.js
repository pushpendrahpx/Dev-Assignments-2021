import React, { useEffect, useState } from "react";
import MainContext from './ContextAPIs/ContextAPI';

import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage/LandingPage";
import Dashboard from "./Pages/Dashboard/Dashboard";
import cookies from "./functions/cookies";
import { notification } from "antd";
let defaultValue = {
  user:{},
  isLoggedIn:false
}
function App() {
  
  let [appState,setAppState] = useState(defaultValue)
  let [appLoaded,setApploaded] = useState(false)
  let Actions = {
    appState,
    setAppState,
    setUser:(user)=>{
      setAppState({
        user,
        isLoggedIn:true
      })
    },
    logOutUser: ()=>{

      localStorage.removeItem("mainuser");
      cookies.eraseCookie("accessToken");

      setAppState({
        user:{},
        isLoggedIn:false
      })
    }
  }
  useEffect(()=>{
    let localStorageState = localStorage.getItem("mainuser");
    let token = cookies.getCookie("accessToken");
    if(localStorageState && token){
      let prevObj = JSON.parse(localStorageState);
      setAppState({
        user:prevObj.data,
        isLoggedIn:true
      });
      console.log("APP STATE SAVED ON RELOAD")
      setApploaded(true)
    }else{
      notification["error"]("failed to fetch")
      setApploaded(true)
    }
  },[])
  return (
      <>
      {
          appLoaded == true ? 
          
              <MainContext.Provider value={Actions}>
              <BrowserRouter>
                <Switch>
                  <Route path="/" exact component={LandingPage} />
                  <Route path="/home" exact component={Dashboard} />
                </Switch>
              </BrowserRouter>
            </MainContext.Provider>
        : 
        <div>
          Loading ...
        </div>
      }
      </>
    
  );
}

export default App;
