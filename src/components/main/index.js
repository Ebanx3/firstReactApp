import { Route, Routes } from "react-router-dom";
import ItemDetailContainer from "./products/ItemDetailContainer";
import ItemListContainer from "./products/ItemListContainer";
import Cart from "../Cart";
import Checkout from "../Checkout";


const Main = () =>{
    return(<main className="main">
        <Routes>
            <Route path="/" element={<ItemListContainer greeting=""/>} />
            <Route path="/producto/:id" element={<ItemDetailContainer/>}/>
            <Route path="/category/:categoryId" element={<ItemListContainer greeting=""/>}/> 
            <Route path="/carrito" element={<Cart />}/>
            <Route path="/checkout" element={<Checkout />}/>
        </Routes>
    </main>)
}

export default Main;