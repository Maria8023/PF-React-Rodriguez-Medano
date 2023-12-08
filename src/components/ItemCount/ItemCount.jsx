import { useState } from "react"


const ItemCount = ({stock, initial, onAdd}) => {
    const [count, setCount] = useState(0)

    const aumentarCantidad =() => {
        setCount(count+1);
    };

    const disminuirCantidad =() =>{
        if(count > 0){
            setCount(count-1);
        }
    }
    
    return (
        <div>
            <h4>Cantidad: {count} </h4>
            <button onClick={disminuirCantidad}> - </button>
            <button onClick={() => onAdd(count)}>Agregar al carrito</button>
            <button onClick={aumentarCantidad}> + </button>
        </div>
    )
}

export default ItemCount