import { useContext } from "react";
import { contexto } from "../context";

const CartProduct = ({ item }) => {
    
    const cartContext = useContext(contexto);

    const eliminarProd = () => {
        cartContext.quitarItem(item.id)
    }
    
    return (
        <div className="cartProduct">
            <img src={item.imgUrl}/>
            <span>{item.name}</span>
            <span>Precio: {item.price}</span>
            <span>Cantidad: {item.cant}</span>
            <a href="#" onClick={eliminarProd}><span class="material-symbols-outlined">delete</span></a>
        </div>)
}

export default CartProduct;