import { useState } from "react";
import { useCartContext } from "../../context/CartContext";
import { collection, addDoc, getFirestore, Timestamp } from "firebase/firestore";
import "./Checkout.css"
import React, { Component } from 'react';
import { Link } from "react-router-dom";


function Checkout() {
    const [idOrder, setIdOrder] = useState('')
    const [dataForm, setDataForm] = useState({
        name: "", email: "", phone: ""
    })
    const { cartList, removeFromCart, totalCart } = useCartContext()


    const handleChange = (e) => {
        setDataForm({
            ...dataForm,
            [e.target.name]: e.target.value
        })
    }

    const generarOrden = (e) => {
        e.preventDefault()


        let orden = {}
        orden.date = Timestamp.fromDate(new Date())

        orden.buyer = dataForm
        orden.total = totalCart();

        orden.items = cartList.map(cartItem => {
            const id = cartItem.id;
            const nombre = cartItem.name;
            const precio = cartItem.price * cartItem.quantity;

            return { id, nombre, precio }
        })


        const db = getFirestore()
        const ordenColeccion = collection(db, 'orders')
        addDoc(ordenColeccion, orden)

            .then(resp => setIdOrder(resp.id))

            .finally(() => {
                removeFromCart()
                setDataForm({
                    name: "", email: "", phone: ""
                })
            })

    }
    return (
        <div>
            <h1 className="py-5">COMPLETA LOS DATOS PARA FINALIZAR LA COMPRA</h1>
            <h2 className="text-success">
                {idOrder.length !== 0 && "  Su número de orden es " + idOrder}
            </h2>

            <center>
                <form
                    onSubmit={generarOrden}
                    onChange={handleChange}
                    className="col-6"
                >

                    <input
                        className="w-100 py-2"
                        type='text'
                        name='name'
                        placeholder='Nombre y Apellido'
                        value={dataForm.name}
                        required
                    /><br />
                    <hr className="bg-white" />
                    <input
                        className="w-100 py-2"
                        type='text'
                        name='phone'
                        placeholder='Telefono'
                        value={dataForm.phone}
                        required
                    />
                    <br />
                    <hr className="bg-white" />
                    <input
                        className="w-100 py-2"
                        type='email'
                        name='email'
                        placeholder='Email'
                        value={dataForm.email}
                        required
                    />
                    <i>*Los correos deben coincidir*</i>

                    <input
                        className="w-100 py-2"
                        type='email'
                        name='email'
                        placeholder='Repita su Email'
                        value={dataForm.email}
                        required
                    /><br />
                    <hr className="bg-white" />
                    <input
                        className="w-100 py-2"
                        type='text'
                        name='address'
                        placeholder='Direccion'
                        required
                    /><br />
                    <hr className="bg-white" />


                    <button className="btn btn-success">Generar Orden</button>


                </form>
                <Link className="btn btn-primary" to="/all" style={{ margin: "1rem" }}>VOLVER A TIENDA</Link>

            </center>

        </div>
    )
}

export default Checkout



