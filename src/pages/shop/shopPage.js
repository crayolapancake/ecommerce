import React from 'react';
import SHOP_DATA from './shopData';
// import './directory.styles.scss';

class ShopPage extends React.Component {
  constructor() {
    super();
    this.state = {
      collections: SHOP_DATA
    };

  }

  render() {
    return (
      <div>
        Shop Page
      </div>
    );
  }

}

export default ShopPage;



