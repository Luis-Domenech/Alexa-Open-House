import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import './App.css';
import SignIn from './components/SignIn';
import Dashboard from './pages/Dashboard';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [message, setMessage] = useState(0);

  useEffect(() => {
    fetch('/hello').then(res => res.json()).then(data => {
      setMessage(data.text);
    });
  }, []);

  return (
    <Router>
      <div>
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/">
            <div className="App">
              <header className="App-header">

                Soon Touring ....

                <p>Alexa says: {message}</p>
              </header>
              <nav>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/Dashboard">Dashboard</Link>
                  </li>
                </ul>
              </nav>
              <SignIn></SignIn>
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
