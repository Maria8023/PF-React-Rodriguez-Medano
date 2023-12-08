const products = [
    {
        id: "1",
        name: "Gomitas",
        price: 150,
        category: "golosinas",
        img: "https://acdn.mitiendanube.com/stores/002/975/549/products/diseno-sin-titulo-2023-03-23t102459-2121-030c8fe745b493a10d16795816441217-1024-1024.png",
        stock: 1000,
        description: "Descripcion de gomitas"
    },
    { id: "2", name: "Tableta de chocolate", price: 750, category: "chocolates", img: "https://clickandfoods.com/cdn/shop/products/15909-600x600.png?v=1628634916", stock: 500, description: "Descripcion de la tableta de chocolate"},
    { id: "3", name: "Galletitas Saladas", price: 400, category: "salad", img: "https://http2.mlstatic.com/D_NQ_NP_959642-MLA70297065307_072023-O.webp", stock: 500, description: "Descripcion de galletitas saladas"},
]

export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout (() => {
            resolve (products)
        }, 1000)
    })
}

export const getProductById = (id) => {
    return new Promise ((resolve) => {
        setTimeout (() => {
            resolve (products.find (prod => prod.id === id))
        }, 500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise ((resolve) => {
        setTimeout (() => {
            resolve (products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}
