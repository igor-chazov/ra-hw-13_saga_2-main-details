import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import ServiceList from './components/ServiceList';
import ServiceView from './components/ServiceView';

function App() {
  return (
    <Router>
      <div className="app__wrapper">
        <Routes>
          <Route path="/*" element={<Navigate replace to="/services" />} />
          <Route exact path="/services" element={<ServiceList />} />
          <Route exact path="/services/:id/details" element={<ServiceView />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
