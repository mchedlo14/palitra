import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import PostDetailed from './components/PostDetailed';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/post/:id' element={<PostDetailed />} />
      </Routes>
    </Router>

);
