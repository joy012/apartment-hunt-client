import React, { createContext, useState } from 'react';
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home';
import Apartment from './Components/Apartment/Apartment';
import 'bootstrap/dist/css/bootstrap.min.css';
import LogIn from './Components/LogIn/LogIn';
import DashBoard from './Components/DashBoard/DashBoard';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

export const userContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  const [user, setUser] = useState({
    isSignedIn: false,
    firstName: '',
    lastName: '',
    name : '',
    email: '',
    password: '',
    confirmPassword: '',
    success: false,
    error: '',
    newUser: false
  })

  if(user.firstName && user.lastName){
    user.name = user.firstName + ' ' + user.lastName;
  }

  if(loggedInUser.name){
    sessionStorage.setItem('name', loggedInUser.name);
    sessionStorage.setItem('email', loggedInUser.email);
  }
  
  return (
    <userContext.Provider value = {[loggedInUser,setLoggedInUser, user, setUser]} >
    <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>

        <Route exact path="/home">
          <Home></Home>
        </Route>

        <Route exact path="/login">
          <LogIn/>
        </Route>
        
        <PrivateRoute exact path="/apartment/:id">
          <Apartment></Apartment>
        </PrivateRoute>

        <PrivateRoute exact path="/dashboard">
            <DashBoard />
        </PrivateRoute>

        <Route path='*'>
          <h2 className = 'text-center py-5'> 4O4  not found .......</h2>
        </Route>
    </Switch>
 </Router>
 </userContext.Provider>
  );
}

export default App;
