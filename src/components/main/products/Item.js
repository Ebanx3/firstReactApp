import {Link} from "react-router-dom";

const Item = ({product}) =>{

    return(
        <div className="Item">
            
            <div className="ItemImg"><img src={product.imgUrl} alt={product.name} /></div>
            <p className="itemName">{product.name}</p>
            <p className="itemPrice">U$S : {product.price}</p>
            <Link className="viewDetailsBtn" to={`/producto/${product.id}`}>Ver detalles</Link>
        </div>
    )
};

export default Item;