const Footer = (props) =>{
    const {name, contact, mail} = props.info
    return(
        <div className="footer-container">
        <p className="component-title">Creaded by {name}</p>
        <p className="component-title">My contact is {contact}</p>
        <p className="component-title">My email is {mail}</p>
        </div>
    );
}

export default Footer;