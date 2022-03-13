import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import CardsList from './components/CardsList/CardsList';
import Navigation from './components/Navigation/Navigation'
import Header from './components/Header/Header';
import IconsSprite from './components/IconsSprite/IconsSprite';
import ErrorPage from './components/ErrorPage/ErrorPage';

const App = () => {
  return (
    <Router>
      <Header />
      <Navigation />

      <main className="main-container">
        <Routes>
          <Route path="/" element={<CardsList />} />
          <Route path="/:category" element={<CardsList />} />
          <Route path="/404" element={<ErrorPage />} />
        </Routes>
      </main>

      <IconsSprite />
    </Router>
  );
}

export default App;
