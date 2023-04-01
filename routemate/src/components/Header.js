import Logo from "../assets/logo.png"
import {Link, NavLink} from "react-router-dom";

export const Header = () => {
    return (
        <header>

            <Link to="/" className={'logo'}>
                <img src={Logo} alt="Route mate Logo"/>
                <span>RouteMate</span>
            </Link>

            <nav className={'navigation'}>
                <NavLink to="/" className={'link'} end>Home</NavLink>
                <NavLink to="/products" className={'link'}>Products</NavLink>
                <NavLink to="/contacts" className={'link'}>Contacts</NavLink>
            </nav>
        </header>
    )
}
