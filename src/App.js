import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import Home from "./pages/Home.js"
import Mentor from "./pages/Mentor.js"
import Prize from "./pages/Prize.js"
import Schedule from "./pages/Schedule.js"
import "./App.css";
import NavBar from './components/Navigation.js';

function App() {
  return (
    <div className="Main">
      <Router>
        <NavBar/>
        <div className="Result">
        
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path='/mentors' component={Mentor}/>
            <Route path='/prizes' component={Prize}/>
            <Route path='/schedule' component={Schedule}/>
           
          </Switch>
        </div>
      </Router>
      
    </div>
  );


}
export default App;