import React, { Component } from "react";
import logo from "./logo_peq.jpg";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <header className="header">
        <nav className="navbar navbar-expand fixed-top">
          <div className="container">
            <img src={logo} className="rounded-circle mb-0" alt="logo" />
            <div className="d-flex flex-column flex-wrap" id="navbarCollapse">
              <h2 className="mr-auto header-text-h2">
                Colegio Nacionalizado La Presentación
              </h2>
              <h4 className="mr-auto header-text-h4">Duitama - Boyacá</h4>
            </div>
            <div className="d- flex flex-column flex-wrap" id="navbarCollapse">
              <form className="form-inline mt-2 mt-md-0">
                <input
                  className="form-control mr-sm-2"
                  type="text"
                  placeholder="Buscar"
                  aria-label="Search"
                />
                <button
                  className="btn btn-outline-success my-2 my-sm-0"
                  type="submit"
                >
                  Buscar
                </button>
              </form>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
