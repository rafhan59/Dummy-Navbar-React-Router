import React from 'react';
import Main from './Components/Main';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import Service from './Components/Pages/Service';
import SignIn from './Components/Pages/SignIn';

function App() {
  return (
    <div>
      <Router>
        <Main />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' exact component={About} />
          <Route path='/service' exact component={Service} />
          <Route path='/sign-in' exact component={SignIn} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
