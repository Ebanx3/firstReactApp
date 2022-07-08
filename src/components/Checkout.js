import React, { useContext } from 'react';
import { collectionOrdenes } from '../firebase';
import { addDoc, serverTimestamp } from 'firebase/firestore';
import { contexto } from '../context';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {

    const [compraTerminada, setCompraTerminada] = useState(false);
    const nav = useNavigate();
    const context = useContext(contexto);

    const checkOutFunc = (e) => {
        e.preventDefault();
        
        const formatedCart = context.carrito.map((prod) => {
            return{
                id: prod.id,
                nombre: prod.name,
                cantidad: prod.cant,
                precio: prod.price
            }
        })
        
        const ordenInfo = {
            buyer: {
                name: e.target.name.value,
                phone: e.target.phone.value,
                email: e.target.email.value,
            },
            items: formatedCart,
            date: serverTimestamp(),
            total: context.precioTotal
        }

        addDoc(collectionOrdenes, ordenInfo).then(res => setCompraTerminada(true)).catch(error => console.log(error))
    }

    if(compraTerminada){
        context.vaciarCarrito();
        nav('/');
    }

    return (
        <form className='formCheckout' onSubmit={checkOutFunc}>
            <h2>Checkout</h2>
            <input type="text" name="name" id="name" placeholder='nombre' required/>
            <input type="email" name="email" id="email" placeholder='email' required/>
            <input type="number" name="phone" id="phone" placeholder='teléfono' required/>
            <input type="submit" value="Completar" className='backIndexBtn' />
        </form>
    )
}

export default Checkout