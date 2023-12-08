import { useNavigate } from "react-router-dom"
import classes from "./Item.module.css"

const Item = ({id, name, img, price}) => {
    const navigate = useNavigate()

    return (
        <div className={classes.cat} >
            <h3>{name}</h3>
            <img src={img} style= {{width: 150}} />
            <h3>${price}</h3>
            <button onClick={() => navigate(`/detail/${id}`)}>Detalle</button>
        </div>
    )
}

export default Item