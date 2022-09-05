import React from 'react';
import Header from './Header';
import Footer from './Footer';
import profile from './Profile';
import BestBooks from './BestBooks';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, NavItem } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Header />
          <Routes>
            <Route 
              exact path="/"
              element={<BestBooks />}
            >
            </Route>
            <Route 
              exact path="/Profile"
              element={<profile />}
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

export default App;
