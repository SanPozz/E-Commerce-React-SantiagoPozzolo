import CartWidget from "./CartWidget";
import logo from "../assets/OnlySneakers.png";

const NavBar = () => {
    return (
        <div className="contenedor">
                <img src={logo} width={150} alt="" />
                <ul>
                    <li><a href="#Nike">Nike</a></li>
                    <li><a href="#Adidas">Adidas</a></li>
                    <li><a href="#Xclusive">Xxclusive</a></li>
                </ul>
                <CartWidget/>
        </div>

    )
}

export default NavBar;