import ItemList from "./ItemList";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "../Loader";
import { getDocs, query, where } from "firebase/firestore";
import { collectionProductos } from "../../../firebase";

const ItemListContainer = () => {

    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const { categoryId } = useParams();
   
    useEffect(() => {
        setLoading(true)
        const ref = categoryId ? query(collectionProductos, where("category", "==", parseFloat(categoryId))) : collectionProductos;

        getDocs(ref)
            .then(res => {
                const productos_mapeados = res.docs.map(prod => {
                    const aux = prod.data();
                    aux.id = prod.id;
                    return aux;
                });
                setItems(productos_mapeados);
                setLoading(false);
            })
            .catch(error => { console.log(error) });
    }, [categoryId])

    return (<>
        {loading ? <Loader /> : <ItemList products={items} />}
    </>);
};

export default ItemListContainer;