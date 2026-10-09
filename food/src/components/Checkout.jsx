import Modal from './UI/Modal';
import Input from './UI/Input';
import Button from './UI/Button';
import { useContext, useActionState } from 'react';
import UserProgressContext from '../store/UserProgressContext.jsx';
import CartContext from '../store/cartContext.jsx';
import useHttp from '../hooks/useHttp.js';
import Error from './Error.jsx';

const requestConfig = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    }
}
export default function Checkout () {

    const {data, error, sendRequest, clearData} = useHttp('http://localhost:3000/orders', requestConfig )
    
    const cartCtx = useContext(CartContext);
    const userProgressCtx = useContext(UserProgressContext);

    const cartTotal = cartCtx.items.reduce((totalPrice, item) =>(
        totalPrice + item.price * item.quantity
    ), 0);

    function checkoutAction(prevState, fd) {
        // if I use handleSubmit on submit form
        // handeSubmit(event) {
        // event.preventDefault();
        // const fd = new FormData(event.target);
        const customerDate = Object.fromEntries(fd.entries());
       
        sendRequest(JSON.stringify({
            order: {
                items: cartCtx.items,
                customer: customerDate,
            }
        }))
       
    }
 
    const [formState, formAction, isSending] = useActionState(checkoutAction, null);

    function handleCloseCheckout() {
        userProgressCtx.hideCheckout();
    }

    function handleFinish() {
        userProgressCtx.hideCheckout();
        cartCtx.clearCart();
        clearData();
    }
    let actions = <>
         <Button type="button" textOnly onClick={handleCloseCheckout}>Close</Button>
        <Button>Submit Order</Button>
    </>

    if(isSending) {
        actions = <span>Sending order data...</span>
    }

    if (data && !error) {
       return <Modal
        open={userProgressCtx.progress === 'checkout'} 
        onClose={handleFinish}>
            <h2>handleSuccess!</h2>
            <p>Your order was submitted successfully.</p>
            <p className='modal-actions'>
                <Button onClick={handleFinish}>Okay</Button>
            </p>
            
        </Modal>
    }
    return(
        <Modal open={userProgressCtx.progress === 'checkout'} onClose={handleCloseCheckout}>
            <form action={formAction}>
                 <h2>Checkout</h2>
                <p> Total Amout: ${cartTotal} </p>

                <Input label="Full Name" id="name" type="text" />
                <Input label="E-Mail Address" id="email" type="email" />
                <Input label="Street" id="street" type="text" />
                
                <div className="control-row">
                    <Input label="Postal Code" id="postal-code" type="text" />
                    <Input label="City" id="city" type="text" />
                </div>

                {error && <Error title="Failed to submit order" message={error} />}
                <p className="modal-actions">
                   {actions}
                </p>
            </form>
        </Modal>
    )
}