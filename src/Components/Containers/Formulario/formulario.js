import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import {styles} from './formulario.style';
import { Context } from '../../../CustomContext';
import { db } from "../../../firebase/firebase";
import { collection, addDoc, serverTimestamp} from "firebase/firestore"

const Formulario = () => {

    const navigate = useNavigate();

    const valorInicial = {
        nombre: '',
        apellido:'',
        email:''
    }

    const [usuario, setUsuario] = useState(valorInicial)

    const capturarInputs = (e) => {
        const {name, value} = e.target;
        const nuevosDatos = ({...usuario, [name]: value})
        setUsuario(nuevosDatos)
    }



    const { cart, total, addUserInfo } = useContext(Context);

    const finalizarCompra = (e) => {
        const ventasCollection = collection(db, "ventas");
        addDoc(ventasCollection, {
            comprador: usuario,
            items: cart,
            total,
            date: serverTimestamp(),
        })
            .then(result =>{
                addUserInfo(usuario.nombre, usuario.apellido, usuario.email, result.id)
                navigate("/Congrats")
            });
        e.preventDefault();;
    }

    return (
        <div style={styles.container}>
            <h3 style={styles.titulo}> Ingresar Usuario</h3>
                <form style={styles.form} onSubmit={finalizarCompra} action="">
                    <input style={styles.input} name="nombre" type="text" placeholder="Ingrese su Nombre" onChange={capturarInputs}/>
                    <input style={styles.input} name="apellido" type="text" placeholder="Ingrese su Apellido" onChange={capturarInputs}/>
                    <input style={styles.input} name="email" type="email" placeholder="Ingrese su Email" onChange={capturarInputs}/>
                    <input style={styles.button} value="Enviar" type="submit"/>
                    
                </form>
        </div>
    )
}

export default Formulario;