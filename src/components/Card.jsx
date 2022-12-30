import PropTypes from "prop-types"
const Card = ({image, name, description, hasChild}) =>{    
    return(
        <div className="card-container">
        <img src={image} alt="La vaca lola"/>
        <h1>Nombre: {name}</h1>
        <h2>Descripcion: {description}</h2>
        <h3>Tiene hijos? {hasChild}</h3>
        <button>Dale Play</button>
        </div>
    );
}
export default Card;

Card.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    hasChild: PropTypes.string.isRequired    
}

Card.defaultProps = {
    image: "https://img.freepik.com/vector-gratis/vaca-sonriente-ilustracion-vectorial-dibujos-animados_96037-417.jpg?w=996&t=st=1671817733~exp=1671818333~hmac=15f4a4661ec55d87a71d2b59d0449dc28980923ec6f6ddaef1d39f1db4ac5a90",
    name: "Default Vaca",
    description: "Default Descrp",
    hasChild: "Default"
}