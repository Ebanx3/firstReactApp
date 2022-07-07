import { useState } from "react"
import { Link } from "react-router-dom"

const ItemCount = ({initial, stock, onAdd}) => {


    const [contador, setContador] = useState(initial);

    const aumentarContador = () => {
        if (contador < stock) setContador(contador + 1);
    };

    const bajarContador = () => {
        if (contador > 0) setContador(contador - 1);
    };

    const agregarCarrito = () => {
        onAdd(contador);
    }

    return(
    <div className="itemCount">
        <button className="itemCount__btn" onClick={aumentarContador}>+</button>
        <span>{contador}</span>
        <button className="itemCount__btn" onClick={bajarContador}>-</button>
        <Link className="addCarrito" to="" onClick={agregarCarrito}>Agregar al carrito</Link>
    </div>
    )
};

export default ItemCount;