import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Profile from './Profile';
import BestBooks from './BestBooks';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, NavItem } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { withAuth0 } from '@auth0/auth0-react';
import Welcome from './Welcome';

import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

class App extends React.Component {
  render() {
    const { isAuthenticated} = this.props.auth0;

    return (
      <>
        <Router>
          <Header />
          <Routes>
            <Route 
              exact path="/"
              element={isAuthenticated && <BestBooks />}
            >
            </Route>
            <Route 
              exact path="/Profile"
              element={isAuthenticated && <Profile />}
            >
            </Route>

            <Route 
             exact path="/Welcome"
              element={isAuthenticated && <Welcome />}
            >
            </Route>
            {/* PLACEHOLDER: add a route with a path of '/about' that renders the `About` component */}
          </Routes>
          <Footer />
        </Router>
      </>
    )
  }
}

export default withAuth0(App);
