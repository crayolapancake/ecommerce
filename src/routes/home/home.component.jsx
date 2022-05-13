import React from 'react';
import { Outlet } from 'react-router-dom';
import Directory from '../../components/directory/directory';

// const HatsPage = () => (
//   <div>
//     <h1>Hats Page</h1>
//   </div>
// );

const Home = () => {
  return (
    <div>
      {/* outlet renders whatever on the same page */}
      <Outlet />
      <Directory />
    </div>
  );
};

export default Home;