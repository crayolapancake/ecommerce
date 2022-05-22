import { useContext, useState } from 'react';
import Button from '../button/button.component';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './cart-dropdown.styles.scss';

const CartDropdown = () => {
  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'> </div>
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;