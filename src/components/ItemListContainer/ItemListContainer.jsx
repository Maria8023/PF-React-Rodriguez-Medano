import classes from "./ItemListContainer.module.css"
import { getProducts, getProductsByCategory } from "../../asyncMock"
import { useEffect, useState } from "react"
import ItemList from "../ItemLisr/ItemList"
import { useParams } from "react-router-dom"

const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])

    const { categoryId } = useParams()

    useEffect(() => {
        const asyncFunction = categoryId ? getProductsByCategory : getProducts

        asyncFunction(categoryId)
            .then(res => {
                setProducts(res)
            })
            .catch(error => {
                console.error(error)
            })
    }, [categoryId])



    return (
        <div>
            <h1 className={classes.greeting}>{greeting}</h1>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer