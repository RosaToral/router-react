import React, {useState, useEffect} from 'react';
import {Characters} from '../models/Characters';
import {Card} from '../components/Card';

export const MenScreen = () => {
  const [characters, setCharacters] = useState(Characters);

  useEffect(() => {
    const men = Characters.filter((e) => e.type === 'h');
    setCharacters(men);
  }, [])

  return (
    <div className="container my-5">
      <div className="row">
        { characters.map((e) => <Card charac={e} key={e.id} />) }
        
      </div>
    </div>
  )
};