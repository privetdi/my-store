import React from "react";
import {Link} from "react-router-dom";

function Header(props){


    return (
    <header> 
        <ul>
        <li><Link to="/" >Catalog</Link></li>
        <li><Link to="/basket" >Basket</Link></li>
        <li></li>
        </ul>
    </header>
    
    )
}

export default Header;