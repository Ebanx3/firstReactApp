import { useContext, useEffect, useState } from "react";
import { contexto } from "../context";
import CartContainer from "./CartContainer";
import { Link } from "react-router-dom";

const Cart = () =>{

    const cartContext = useContext(contexto);
    const [carritoVacio, setCarritoVacio] = useState(cartContext.cantProductos == 0);
    
    const vaciarCart = () => {
        cartContext.vaciarCarrito();
    }

    useEffect(()=>{
        if(cartContext.cantProductos == 0) setCarritoVacio(true)
    },[cartContext])

    return(
        <div className="cart">
            {carritoVacio ? <h2 className="carritoVacio">Carrito vacío vuelve a inicio para ver los productos</h2> : <CartContainer/>}
            <div className="cartInfo">
                <span>Total : {cartContext.precioTotal}</span>
                <a href="#" onClick={vaciarCart}><span className="material-symbols-outlined">delete</span></a>
            </div>
            {carritoVacio ? <Link className="backIndexBtn" to='/'>Volver a inicio</Link> : <Link className="backIndexBtn" to="/checkout">Terminar compra</Link>}
        </div>
    )
}

export default Cart;