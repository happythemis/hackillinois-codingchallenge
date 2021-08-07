import React from 'react';
import HIlogo from '../hicon1.png';
import {Link} from 'react-router-dom'
import './Navigation.css';

function NavBar() {
// const NavBar = () => {
  return (
    <nav>
      <div>
        <div>
          <Link to="/" className="nav-logo">
            <img className = 'App-logo' src={HIlogo} />
          </Link>
        </div>

        <div className="nav-content">
          <ul>
              <Link className="nav-menu" to="/">Home</Link>
              <Link className="nav-menu" to="/mentors">Mentors</Link>
              <Link className="nav-menu" to="/prizes">Prizes</Link>
              <Link className="nav-menu" to="/schedule">Schedule</Link>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default NavBar;
