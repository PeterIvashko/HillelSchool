import React from 'react';
import { BrowserRouter as Router, Route, Outlet } from 'react-router-dom';
import Home from './components/Main';
import DestinationList from './components/DestinationForm';
import HotelList from './components/HotelList';

function App() {
  return (
    <Router>
      <Route path="/" element={<Home />} />
      <Route path="/destination" element={<DestinationList />} />
      <Route path="/hotels" element={<HotelList />} />
      <Outlet />
    </Router>
  );
}

export default App;
