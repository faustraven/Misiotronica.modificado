import React from "react";
import Logo from "../icons/Logo";
import { NavLink, Outlet } from "react-router-dom";
import User from "../icons/User";
import Menu from "../icons/Menu";
import Cart from "../icons/Cart";
import Home from "../icons/Home";

function Inicio() {
  return (
    <>
      <div className="content">
        <aside className="aside">
          <header className="header">
            <div className="header__title">
              <Logo />
              MISIOTRONICA
            </div>
          </header>
          <nav className="main-nav">
            <ul className="main-nav__list">
              <NavLink to={"/"} className="main-nav__link">
                {" "}
                <Home /> <span>Servicios</span>{" "}
              </NavLink>
              <NavLink to={"/nosotros"} className="main-nav__link">
                {" "}
                <Menu /> <span>Nosotros</span>{" "}
              </NavLink>
              <NavLink to={"/contacto"} className="main-nav__link">
                {" "}
                <User /> <span>Contacto</span>{" "}
              </NavLink>
            </ul>
          </nav>
        </aside>
        <main className="main">
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default Inicio;
