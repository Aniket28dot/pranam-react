import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
    const [loggedIn, setLoggedIn] = useState("Login");

    const switchLogin = () => {
        loggedIn === "Login" ? setLoggedIn("Logout") : setLoggedIn("Login");
    }

    return <div className="header">
        <div className="logo-container">
            <img className="logo" src={LOGO_URL}></img>
        </div>
        <div className="nav-items">
            <ul>
                <li>
                    <Link to={'/'}>Home</Link>
                </li>
                <li>
                    <Link to={'/about'}>About Us</Link>
                </li>
                <li>
                    <Link to={'/contact'}>Contact</Link>
                </li>
                <li>Cart</li>
                <button onClick={switchLogin}>{loggedIn}</button>
            </ul>
        </div>
    </div>
}

export default Header;