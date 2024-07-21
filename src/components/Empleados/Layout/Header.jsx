import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ toggleMenuCallback }) => {
  return (
    <header id="page-topbar">
      <div className="navbar-header">
        <div className="d-flex">
          <button
            type="button"
            className="btn btn-sm px-3 font-size-16 header-item waves-effect"
            id="vertical-menu-btn"
            onClick={toggleMenuCallback}
          >
            <i className="fa fa-fw fa-bars"></i>
          </button>
          <div className="navbar-brand-box">
            <Link to="/" className="logo logo-dark">
              <span className="logo-sm">
                <img src="/logo-sm.png" alt="" height="22" />
              </span>
              <span className="logo-lg">
                <img src="/logo-dark.png" alt="" height="20" />
              </span>
            </Link>
          </div>
        </div>
        <div className="d-flex">
          {/* Contenido adicional del encabezado */}
        </div>
      </div>
    </header>
  );
};

export default Header;
