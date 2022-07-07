import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { doc, getDoc } from "firebase/firestore";
import { collectionProductos } from "../../../firebase";

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const { id } = useParams();

    useEffect(
        ()=>{
            getDoc(doc(collectionProductos, id))
            .then(res => {
                const newObj = {...res.data(), id:id};
                setItem(newObj)
            })
            .catch(error => console.log(error))
        }
    ,[item]);

    return(
        <ItemDetail product={item}/>
    )
};

export default ItemDetailContainer;