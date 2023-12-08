import { useState } from "react"
import ItemCount from "../ItemCount/ItemCount"
import {Link} from "react-router-dom"
import { CartContex } from "../context/CartContex"

const ItemDetail = ({ id, name, price, img, stock, description}) => {
    const [quantityAdded, setQuantityAdded] = useState(0)


    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)
        
        const item = {
            id, name, price
        }
        
        addItem(item, quantity)
    }
        
    return (
        <div>
            <h1>{name}</h1>
            <img src= {img} style= {{width: 400}} />
            <h3>${price}</h3>
            <h3>{description}</h3>
            {
                quantityAdded > 0 ? (
                <Link to="/cart" className="Option">Finalizar compra</Link>
                ) : (
                    <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
                )
            }
        </div>
    )
}

export default ItemDetail