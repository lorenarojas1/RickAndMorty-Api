import React, { useState, useEffect } from 'react';
import './character.css';

export const InfoCharacter = () => {
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

  console.log(characters);

  return (
    <div className="characters-container">
      {characters.map((personaje) => {
        return (
          <div className="character-card" key={personaje.id}>
            <div>Origen {personaje.origen.name}</div>
            <div>Tipo {personaje.type}</div>
            <div>Status {personaje.status}</div>
            <div>Locación {personaje.location.name}</div>
          </div>
        );
      })}
    </div>
  );
};
