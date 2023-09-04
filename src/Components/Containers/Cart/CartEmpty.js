import { Link } from "react-router-dom";
import empty from "../../../Assets/empty.png"

const CartEmpty = () => {
    return(
        <div style={styles.container}>
        <img style={styles.img} src={empty} alt="Carrito vacio" />
        <p>Para agregar productos haz click <Link to="/">Aqui</Link></p>
        </div>

    )
}

export default CartEmpty;

const styles = {
    container:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        opacity: 0.5
    },
    img:{
        maxWidth: '50%',
        margin: '50px 0'
    }
}