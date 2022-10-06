import React, {useState} from 'react';
import {useParams} from 'react-router';
import {Characters} from '../models/Characters';

export const CharacterScreen = ({history}) => {
  const params = useParams();
  const [character] = useState(Characters.find((e) => e.id === params.id));
  const img = `/assets/${character.type}-${character.id}.png`;

  const handleReturn = () => history.goBack();

  return (
    <div className="container my-5">
      <div className="card d-flex flex-row">
        <img className="card-img-top" src={img} alt={character.id} />
        <div className="card-body">
          <h1 className="card-title">{character.name}</h1>
          <p className="card-text">
            Sexo: {(character.type === 'h') ? 'Hombre' : 'Mujer'} 
          </p>
          <p className="card-text">
            {character.description}
          </p>
          <button className="btn btn-primary" onClick={handleReturn}>
            Go Back
          </button>
        </div>
      </div>

    </div>
  )
}