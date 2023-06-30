import React from "react";
import { Link, Outlet } from "react-router-dom";
import Footer from "./footer";

function Layout() {
  return (
    <>
      <header>
        <ul>
          <li>
            <Link to="/my-store/catalog">Catalog</Link>
          </li>
          <li>
            <Link to="/my-store/basket">Basket</Link>
          </li>
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
