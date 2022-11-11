import React, { useContext } from "react";
import { Context } from "../../../CustomContext";

const Congrats = () => {
    const { userInfo } = useContext(Context);

    return (
        <div style={style.container}>
            <h1>Tu ID de compra es: {userInfo.id}</h1>
            <h4>Datos de usuario</h4>
            <h5>Nombre: {userInfo.nombre}</h5>
            <h5>Apellido: {userInfo.apellido}</h5>
            <h5>Email: {userInfo.email}</h5>
        </div>
    )
}

export default Congrats;

const style = {
    container:{
        display: 'flex',
        flexDirection: 'Column',
        alignItems: 'Center',
        maxWidth: 950,
        margin: 'auto',
        marginTop: 35,
        backgroundColor: '#f6f6f6',
        padding: 10,
        borderRadius: 10
    }
}