import { useState } from "react";
import { createContext } from "react";

export const contexto = createContext();
const Provider = contexto.Provider;

export const CartContext = ({ children }) => {

    const [carrito, setCarrito] = useState([]);
    const [cantProducts, setCantProducts] = useState(0);
    const [precioTotal, setPrecioTotal] = useState(0);

    const addItem = (item, quant) => {
        const newCarrito = [...carrito];
        setCantProducts(cantProducts + quant);
        setPrecioTotal(Math.round((precioTotal + item.price * quant)* 100) / 100);

        const index = newCarrito.findIndex(p => p.id == item.id);
        if (index < 0) {
            item.cant = quant;
            newCarrito.push(item);
        }
        else{
            newCarrito[index].cant += quant;
        }
        setCarrito(newCarrito);
    };

    const removeItem = (itemId) => {
        const index = carrito.findIndex(p => p.id == itemId);
        if (index < 0) {
            return;
        }
        else {
            const newCarrito = [...carrito];
            setCantProducts(cantProducts - carrito[index].cant);
            setPrecioTotal(precioTotal - Math.round((carrito[index].price * carrito[index].cant)* 100) / 100);
            newCarrito.splice(index, 1);
            setCarrito(newCarrito);
        }
    };

    const clear = () =>{ 
        setCarrito([]);
        setCantProducts(0);
        setPrecioTotal(0);
    };

    const isIncart = (id) => {
        const index = carrito.findIndex(p => p.id == id);
        return index < 0 ? false : true;
    }

    const valorContexto = {
        cantProductos: cantProducts,
        carrito: carrito,
        precioTotal: precioTotal,
        agregarItem: addItem,
        quitarItem: removeItem,
        vaciarCarrito: clear,
        existeEnCarrito: isIncart,
    };


    return (
        <Provider value={valorContexto}>
            {children}
        </Provider>
    );
};