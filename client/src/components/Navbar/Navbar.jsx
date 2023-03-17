import './Navbar.css';
import logo from "../../assests/logo.png"

export const Navbar=()=>{
    return (
        <div>
            <img width={50} src={logo} alt="Logotipo"/>
            <h1>DevinFood</h1>
            <a href="#">Menu</a>
        </div>
    )
}