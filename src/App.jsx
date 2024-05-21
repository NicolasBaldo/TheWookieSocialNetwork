import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Provider } from 'jotai';
import Auth from './components/Auth';
import Profile from './components/Profile';
import Posts from './components/Posts';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; 

function App() {
  return (
    <Provider>
      <Router>
        <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-orange rounded-0">
            <div className="container">
            <Link className="navbar-brand custom-navbar-brand" to="/">Die Sozial Wookiebook</Link>

              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
               
                  <li className="nav-item">
                    <Link className="nav-link text-dark" to="/profile">Profil wookie</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link text-dark" to="/posts">Veröffentlichungen wookie</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <div className="container mt-4">
            <Routes>
              <Route path="/profile" element={<Profile />} />
              <Route path="/posts" element={<Posts />} />
              <Route path="/" element={<Auth />} />
            </Routes>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;