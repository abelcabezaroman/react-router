import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Menu from "./core/components/Menu/Menu";
import AboutPage from "./pages/AboutPage/AboutPage";
import HomePage from "./pages/HomePage/HomePage";
import UsersDetailPage from "./pages/UsersPage/pages/UsersDetailPage/UsersDetailPage";
import UsersPage from "./pages/UsersPage/UsersPage";

function App() {

  return (
    <Router>
      <div className="App">
        <div className="App-header">

          <Menu></Menu>

          <Switch>
            <Route path="/users/:idUser">
              <UsersDetailPage></UsersDetailPage>
            </Route>
            <Route path="/users">
              <UsersPage></UsersPage>
            </Route>
            <Route path="/about">
              <AboutPage></AboutPage>
            </Route>
            <Route path="/">
              <HomePage></HomePage>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
