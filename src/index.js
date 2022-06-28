import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css";
import "./sass/main.scss"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PortfolioPage from './pages/PortfolioPage';
import ProfilePage from './pages/ProfilePage';
import ResumePage from './pages/ResumePage';
import ContactsPage from './pages/ContactsPage';



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>

    <Switch>
      <Route path="/" exact component={App} />
      <Route path="/portfolio" exact component={PortfolioPage} />
      <Route path="/profile" exact component={ProfilePage} />
      <Route path="/resume" exact component={ResumePage} />
      <Route path="/contacts" exact component={ContactsPage} />
    </Switch>

  </Router>
);
