import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import HomePage from './pages/HomePage/HomePage';
import CounterPage from './pages/CounterPage/CounterPage';

const AppRouter = () => {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<HomePage />} />
            <Route path="counter" element={<CounterPage />} />
          </Route>
        </Routes>
      </Router>
    )
}

export default AppRouter;