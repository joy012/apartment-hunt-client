import React, { createContext, useState } from 'react';
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import Apartment from './Components/Apartment/Apartment';
import 'bootstrap/dist/css/bootstrap.min.css';

export const userContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <userContext.Provider value = {[loggedInUser,setLoggedInUser]} >
    <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>

        <Route exact path="/home">
          <Home></Home>
        </Route>

        <Route exact path="/apartment">
          <Apartment></Apartment>
        </Route>

        <Route path='*'>
          <h2 className = 'text-center py-5'> 4O4  not found .......</h2>
        </Route>
    </Switch>
 </Router>
 </userContext.Provider>
  );
}

export default App;
