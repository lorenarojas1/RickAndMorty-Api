import { useState, useEffect } from 'react';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import { red } from '@mui/material/colors';

import './Character.css';

export const CharacterRender = () => {
  const url = 'https://rickandmortyapi.com/api/character/1,24,33,183,217,218';

  const [characters, setCharacters] = useState([]);

  const fetchData = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setCharacters(data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="characters-container">
        {characters.map((personaje) => {
          return (
            <div className="character-card" key={personaje.id}>
              <img
                className="image-character"
                src={personaje.image}
                alt={personaje.name}
              />
              <div className="info-card">
                <section>
                  <div className="name-character">{personaje.name}</div>
                  <section className="flex-column">
                    <div className="specie-type">{personaje.species}</div>
                    <div className="description">
                      {personaje.gender} | {personaje.origin.name}{' '}
                    </div>
                  </section>
                </section>
                <section className="btn-container">
                  <IconButton
                    className="btn-info"
                    color="primary"
                    aria-label="info"
                  >
                    <InfoIcon sx={{ fontSize: 40, color: red[700] }} />
                  </IconButton>
                </section>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
