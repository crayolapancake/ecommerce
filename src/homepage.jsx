import React from 'react';
import './homepage.styles.scss';


const Homepage = () => (
  <div className='homepage'>
    <div className='directory-menu'>

      <div className='menu-item'>
        <div className='content'>
          <h1>Necklaces</h1>
          <span>Shop Now</span>
        </div>
      </div>

      <div className='menu-item'>
        <div className='content'>
          <h1>Earrings</h1>
          <span>Shop Now</span>
        </div>
      </div>

      <div className='menu-item'>
        <div className='content'>
          <h1>Bracelets</h1>
          <span>Shop Now</span>
        </div>
      </div>

      <div className='menu-item'>
        <div className='content'>
          <h1>Rings</h1>
          <span>Shop Now</span>
        </div>
      </div>

      <div className='menu-item'>
        <div className='content'>
          <h1>Bookmarks</h1>
          <span>Shop Now</span>
        </div>
      </div>

    </div>
  </div>
);

export default Homepage;