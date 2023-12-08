import Navbar from "./components/Navbar/Navbar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { CartProvider } from "./components/context/CartContex"

function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <Navbar/>
          <Routes>
            <Route path="/" element={<ItemListContainer greeting= " 🍬Bienvenidos al Universo Candy 🍭"/>} />
            <Route path="/category/:categoryId" element={<ItemListContainer greeting= "Productos por categoria"/>} />
            <Route path="/detail/:productId" element={<ItemDetailContainer /> } />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </>
  )
}

export default App
