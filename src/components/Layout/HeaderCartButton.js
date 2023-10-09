import { useContext, useEffect, useState } from 'react';

import CartIcon from '../Cart/CartIcon';
import CartContext from '../../Store/cart-context';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {
  const [btnIsHighlighted, setBtnHignlighted] = useState(false)
  const cartCtx = useContext(CartContext);
  const {items}=cartCtx
  useEffect(() => {
    if(items===0){
      return
    }
    setBtnHignlighted(true)
    setTimeout(()=>{
    setBtnHignlighted(false)
    },300)
  }, [items]);
  const numberOfCartItems =items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
  const buttonClasses = `${classes.button} ${btnIsHighlighted?classes.bump:''}`
  return (
    <button className={buttonClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;