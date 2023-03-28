import { useState } from 'react';
import ModalSubscribe from '../Subscribe/ModalSubscribe';
import '../App';
import './Header.css';

const HeaderPage = () => {
  const [openModalSubscribe, setOpenModalSubscribe] = useState(false);
  return (
    <header className="header-container">
      <h1 className="margin-0">
        PRUEBA TÉCNICA PARA FONTEND <span className="red">ZERMAT USA</span>
      </h1>
      <p className="margin-0">VER INFORMACIÓN DE PERSONAJES</p>
      <button
        className="btn-subscribe margin-0 red"
        onClick={() => setOpenModalSubscribe(true)}
      >
        Suscribete al boletín
      </button>
      <ModalSubscribe
        open={openModalSubscribe}
        onClose={() => setOpenModalSubscribe(false)}
      />
    </header>
  );
};

export default HeaderPage;
