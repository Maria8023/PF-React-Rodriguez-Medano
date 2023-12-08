import { FaShoppingCart } from "react-icons/fa";
import classes from "./CardWidget.module.css"
const CartWidget = () => {
    return (
        <button className={classes.carrito}>
            <FaShoppingCart />
            0
        </button>
    )
}

export default CartWidget