import classes from "./Navbar.module.css"
import CartWidget from "../CartWidget/CardWidget"
import { useNavigate } from "react-router-dom"



const Navbar = () => {
    const navigate = useNavigate()

    return (
        <nav className={classes.container}>
            <section className={classes.btns}>
            <h1 onClick={() => navigate("/")} className={classes.name}>Tienda Dulce</h1>
            <div>
                <button onClick={() => navigate("/category/golosinas")} className={classes.btn}>Golosinas</button>
                <button onClick={() => navigate("/category/chocolates")} className={classes.btn}>Chocolates</button>
                <button onClick={() => navigate("/category/salad")} className={classes.btn}>Salad</button>
            </div>
            </section>
            <CartWidget/>
        </nav>
    )
}

export default Navbar