import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';
import { contexto } from "../../../context";

const ItemDetail = ({ product }) => {

    const [cant, setCant] = useState(1);
    const [mostrarIC, setMostrarIC] = useState(true)

    const cartContext = useContext(contexto);


    const onAdd = (num) => {
        setCant(num);
        setMostrarIC(false);
        cartContext.agregarItem(product, num);
    }

    return (
        <div className="itemDetail">
            <img src={product.imgUrl} alt={product.name} />
            <div className="itemInfo">
                <h1>{product.name}</h1>
                <p>{product.description}</p>
                <p>Precio: U$S{product.price}</p>
                {mostrarIC ? <ItemCount initial={1} stock={product.stock} onAdd={onAdd} /> : <Link to="/carrito" className='verCarritoBtn'>Ver carrito</Link>}
            </div>
        </div>
    )
}

export default ItemDetail;