import React from "react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { contexto } from "../../context";

const CartWidget = () => {


    const { cantProductos, precioTotal } = useContext(contexto);

    const cantidadProd = () => cantProductos <= 99 ? cantProductos : '...';

    return (
        <>
            <NavLink to='/carrito' className="cartWidget">
                <span className="material-symbols-outlined">shopping_cart</span>
                <div className="cartCantidad">{cantidadProd()}</div>
            </NavLink>
            <span className="cartTotal">U$S: {precioTotal}</span>
        </>
    )
}

export default CartWidget;