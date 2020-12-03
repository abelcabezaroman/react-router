import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import AboutPage from "./pages/AboutPage/AboutPage";
import HomePage from "./pages/HomePage/HomePage";

function App() {

  return (
    <Router>
      <div className="App">
        <div className="App-header">

          <Switch>
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
