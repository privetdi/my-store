import React from "react";
import { Link, Outlet } from "react-router-dom";
import Footer from "./footer";

function Layout() {
  return (
    <>
      <header>
        <ul>
          <li><Link to="/catalog">Catalog</Link></li>
          <li><Link to="/basket">Basket</Link></li>
          <li></li>
        </ul>
      </header>
      <div className="main">
        <Outlet />
      </div>

      <Footer />
    </>
  );
}

export default Layout;
