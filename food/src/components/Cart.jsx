import {useContext} from 'react';
import CartContext from "../store/cartContext.jsx";
import UserProgressContext from '../store/UserProgressContext.jsx';
import Modal from "./UI/Modal.jsx";
import Button from "./UI/Button.jsx";
import CartItem from './CartItem.jsx';

export default function Cart () {
 const cartCtx = useContext(CartContext);
 const userProgressCtx = useContext(UserProgressContext);

 const cartTotal = cartCtx.items.reduce((totalPrice, item) =>(
     totalPrice + item.price * item.quantity
 ), 0);

 function closeCartHandler() {
    userProgressCtx.hideCart();
 }
  function goToCheckoutHandler() {
    userProgressCtx.showCheckout();
  }

 return(
<Modal className="cart"
 open={userProgressCtx.progress === 'cart'}
  onClose={userProgressCtx.progress === 'cart' ? closeCartHandler : undefined}> 
    <h2>Your Cart</h2>
    <ul>
        {cartCtx.items.map((item) =>(
        <CartItem
            key={item.id}
            name={item.name}
            price={item.price}
            quantity={item.quantity}
            onIncrease={() => cartCtx.addItem(item)}
            onDecrease={() => cartCtx.removeItem(item.id)}
        />
    ))} 
    </ul>

    <p className="cart-total"> {`$${cartTotal}`} </p>

    <p className="modal-actions">
        <Button textOnly onClick={closeCartHandler}>Close</Button>
       { cartCtx.items.length > 0 && (
            <Button onClick={goToCheckoutHandler}> Go to Checkout</Button>
        )}
    </p>
     
 </Modal>
    )
}