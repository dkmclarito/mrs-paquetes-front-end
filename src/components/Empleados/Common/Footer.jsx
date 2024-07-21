import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            {new Date().getFullYear()} © Mr. Paquetes.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
