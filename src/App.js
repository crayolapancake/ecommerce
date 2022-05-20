import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import './App.css';
import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';
import Authentication from './routes/authentication/authentication.component';

const Shop = () => {
  return (
    <div>
      <h1>Shop Page</h1>
    </div>
  );
};

function App() {
  return (
    <Routes>
      {/* nav at top so it persists on all pages */}
      <Route path='/' element={<Navigation />} >
        {/* index means '/' */}
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='auth' element={<Authentication />} />
      </Route>
    </Routes>

  );
}

export default App;
