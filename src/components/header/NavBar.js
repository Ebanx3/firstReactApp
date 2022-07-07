import CartWidget from "./CartWidget";
import {NavLink, Link} from "react-router-dom";

const NavBar = () => {
    return (<nav className="nav">
        <Link className="navLogo" to="/"><h1 >La tienda</h1></Link>
        <ul className="navUl">
            <li><NavLink className="navNavLink" to="/">Inicio</NavLink></li>
            <li><NavLink className="navNavLink" to="/category/1">Categoria1</NavLink></li>
            <li><NavLink className="navNavLink" to="/category/2">Categoria2</NavLink></li>
            <li><NavLink className="navNavLink" to="/category/3">Categoria3</NavLink></li>
            <li><CartWidget/></li>
        </ul>
    </nav>);
};

export default NavBar;


