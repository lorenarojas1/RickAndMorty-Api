import { useState } from 'react';
import HeaderPage from 'Header/Header';
import { CharacterRender } from './CharacterList/Character';
import ModalFilter from './ModalFilter/ModalFilter';
import FilterICon from '@mui/icons-material/FilterAlt';
import { common } from '@mui/material/colors';
import './index.css';
import './App.css';

function App() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <HeaderPage />
      <div className="app-container">
        <div className="body-container">
          <div className="row">
            <h2>Personajes</h2>
            <button className="btn-filter" onClick={() => setOpenModal(true)}>
              <FilterICon sx={{ fontSize: 35, color: common.white }} />
              Filtro
            </button>
            <ModalFilter open={openModal} onClose={() => setOpenModal(false)} />
          </div>
          <CharacterRender />
        </div>
      </div>
    </>
  );
}

export default App;
