import { useContext } from "react";
import { contexto } from "../context";
import CartProduct from "./CartProduct";

const CartContainer = () =>{

    const cartContext = useContext(contexto);


    return(
        cartContext.carrito.map(prod => <CartProduct item={prod}/>)
    )
}

export default CartContainer;