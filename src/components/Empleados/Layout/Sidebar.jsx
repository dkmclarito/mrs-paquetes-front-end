import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ theme, type, isMobile }) => {
  return (
    <div className={`vertical-menu ${theme} ${type}`}>
      <div className="h-100">
        <div className="menu-content">
          <ul className="metismenu list-unstyled" id="side-menu">
            <li>
              <Link to="/" className="waves-effect">
                <i className="mdi mdi-view-dashboard"></i>
                <span>Inicio</span>
              </Link>
            </li>
            <li>
              <Link to="/gestion-empleados" className="waves-effect">
                <i className="mdi mdi-account-group"></i>
                <span>Gestión de Empleados</span>
              </Link>
            </li>
            {/* Agregar más enlaces según sea necesario */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
