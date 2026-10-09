import logoImg from '../assets/logo.jpg';
import Button from './UI/Button';
import CartContext from '../store/cartContext.jsx';
import UserProgressContext from '../store/UserProgressContext.jsx';
import {useContext} from 'react';
export default function Header() {

    const cartCtx = useContext(CartContext);
    const userProgressCtx = useContext(UserProgressContext);

    const totalCartItems = cartCtx.items.reduce((totalNumberOfItems, item) =>  {
      return  totalNumberOfItems+item.quantity;
    },0);

    function showCartHandler() {
        userProgressCtx.showCart();
    }
    return (     
        <header id="main-header">
            <div id="title">
                <img src={logoImg} alt="Logo" />
                <h1>ReactFood</h1>
            </div>

            <nav>
                <Button textOnly onClick={showCartHandler}>
                    cart ({totalCartItems})
                </Button>
            </nav>
        </header>
    )
}